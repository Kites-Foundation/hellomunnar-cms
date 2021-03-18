FROM node:14
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
COPY dashboard-config.json /tmp/dashboard-config.json
# Replacing dummy with the actual value
RUN sed -i "s|googleClientId|$GOOGLE_CLIENT_ID|g" /tmp/dashboard-config.json && sed -i "s|googleClientSecret|$GOOGLE_CLIENT_SECRET|g" /tmp/dashboard-config.json
RUN yarn strapi config:restore -f /tmp/dashboard-config.json
CMD ["yarn","start"]
