FROM node:14-alpine
RUN apk add --upgrade git
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN export NODE_ENV=production && yarn build
CMD ["sh","start.sh"]
