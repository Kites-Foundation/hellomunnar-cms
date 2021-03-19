export NODE_ENV=production
yarn build
yarn strapi config:restore -f /tmp/dashboard-config.json
yarn start
