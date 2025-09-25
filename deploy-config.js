// Deployment configuration
// Modify this file based on where you're deploying your app

module.exports = {
  // For local development (default)
  development: {
    publicPath: '/',
    routerBasename: '/'
  },
  
  // For production deployment to root domain
  production: {
    publicPath: '/',
    routerBasename: '/'
  },
  
  // For production deployment to subfolder (e.g., /myapp/)
  subfolder: {
    publicPath: './',  // Use relative paths
    routerBasename: './'  // Use relative paths for router
  },
  
  // For production deployment to specific subfolder (e.g., /cowching/)
  // subfolder: {
  //   publicPath: '/cowching/',
  //   routerBasename: '/cowching'
  // }
};

// Current deployment target - change this when deploying
const DEPLOYMENT_TARGET = process.env.DEPLOYMENT_TARGET || 'development';

module.exports.current = module.exports[DEPLOYMENT_TARGET];
