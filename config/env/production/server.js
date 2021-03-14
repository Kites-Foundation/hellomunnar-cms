module.exports = ({ env }) => ({
  emitErrors: false,
  url: env('PUBLIC_URL', 'https://cms.hellomunnar.in'),
  proxy: env.bool('IS_PROXIED', false),
  admin: {
    url: env('PUBLIC_ADMIN_URL', '/dashboard'),
    autoOpen: false,
  },
});
