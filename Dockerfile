FROM node:14-alpine
RUN apk --update add git less openssh
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . ./
RUN yarn strapi config:restore -f dashboard-config.json

CMD ['yarn','start']
