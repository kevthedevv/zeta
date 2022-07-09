
  settings          = { path: '.env', defaults: '.env.defaults' };
  require( 'dotenv-defaults' ).config( settings );


  const config  = {
    use: {
      headless: false,
      viewport: { width: 1920, height: 1080 },
      baseURL: process.env.BASE_URL
    },
    reporter: './custom-reporter.js',
  };

  module.exports = config;