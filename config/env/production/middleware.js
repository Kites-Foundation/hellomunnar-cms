module.exports = {
  settings: {
    parser: {
      enabled: true,
      multipart: true,
      formidable: {
        maxFileSize: 20 * 1024 * 1024 // 20mb
      }
    }
  },
};
