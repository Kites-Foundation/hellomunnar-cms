export NODE_ENV=production
cp dashboard-config.json /tmp/dashboard-config.json
# Replacing dummy with the actual value
sed -i "s|googleClientId|$GOOGLE_CLIENT_ID|g" /tmp/dashboard-config.json
sed -i "s|googleClientSecret|$GOOGLE_CLIENT_SECRET|g" /tmp/dashboard-config.json
# Restore values
yarn strapi config:restore -f /tmp/dashboard-config.json
yarn start
