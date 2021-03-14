module.exports = ({ env }) => ({
  // Aws S3 Upload for production
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID'),
      secretAccessKey: env('AWS_ACCESS_SECRET'),
      region: env('AWS_REGION'),
      params: {
        Bucket: env('AWS_BUCKET'),
      },
      cdn: env('CDN_URL', 'https://cdn.hellomunnar.in/')
    },
  },
});
