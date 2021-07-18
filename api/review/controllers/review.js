"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  async create(ctx) {
    let entity;

    const user = ctx.state.user.id;
    const hasReviewedFilter = { user };

    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);

      if (data?.thingsToDo) {
        hasReviewedFilter.thingsToDo = data?.thingsToDo;
      } else if (data?.destination) {
        hasReviewedFilter.destination = data?.destination;
      } else {
        return ctx.badRequest(null, [
          { messages: [{ id: "thingsToDo or destination must be given" }] },
        ]);
      }

      const hasReviewed = await strapi
        .query("review")
        .findOne(hasReviewedFilter);

      if (hasReviewed) {
        return ctx.badRequest(null, [
          { messages: [{ id: "User has already reviewed." }] },
        ]);
      }

      data.user = user;
      entity = await strapi.services.review.create(data, { files });
    } else {
      const req = ctx.request.body;

      if (req?.thingsToDo) {
        hasReviewedFilter.thingsToDo = req.thingsToDo;
      } else if (req?.destination) {
        hasReviewedFilter.destination = req.destination;
      } else {
        return ctx.badRequest(null, [
          { messages: [{ id: "thingsToDo or destination must be given" }] },
        ]);
      }

      const hasReviewed = await strapi
        .query("review")
        .findOne(hasReviewedFilter);

      if (hasReviewed) {
        return ctx.badRequest(null, [
          { messages: [{ id: "User has already reviewed." }] },
        ]);
      }

      req.user = user;
      entity = await strapi.services.review.create(req);
    }
    return sanitizeEntity(entity, { model: strapi.models.review });
  },
  async update(ctx) {
    const { id } = ctx.params;
    const user = ctx.state.user.id;

    const canUserUpdate = await strapi.query("review").findOne({ user, id });

    if (!canUserUpdate) {
      return ctx.badRequest(null, [
        { messages: [{ id: "Update permission denied" }] },
      ]);
    }

    let entity;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      data.user = ctx.state.user.id;
      // updatating destination and thingsToDo not allowed
      delete data?.destination;
      delete data?.thingsToDo;
      entity = await strapi.services.review.update({ id }, data, {
        files,
      });
    } else {
      ctx.request.body.user = ctx.state.user.id;
      // updatating destination and thingsToDo not allowed
      delete ctx.request.body?.destination;
      delete ctx.request.body?.thingsToDo;
      entity = await strapi.services.review.update({ id }, ctx.request.body);
    }

    return sanitizeEntity(entity, { model: strapi.models.review });
  },
};
