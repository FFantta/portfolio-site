module.exports = {
  publicPath: process.env.DEPLOY_ENV === 'github' ? '/basic-vue-portfolio/' : './'
};
