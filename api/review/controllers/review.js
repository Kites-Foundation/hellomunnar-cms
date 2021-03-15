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

      if (data?.activity) {
        hasReviewedFilter.activity = data?.activity;
      } else if (data?.destination) {
        hasReviewedFilter.destination = data?.destination;
      } else {
        return ctx.badRequest(null, [
          { messages: [{ id: "Activity or destination must be given" }] },
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

      if (req?.activity) {
        hasReviewedFilter.activity = req.activity;
      } else if (req?.destination) {
        hasReviewedFilter.destination = req.destination;
      } else {
        return ctx.badRequest(null, [
          { messages: [{ id: "Activity or destination must be given" }] },
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
};
