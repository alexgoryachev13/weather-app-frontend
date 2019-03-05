const routes = require('next-routes');

module.exports = routes()
  .add('about', '/about')
  .add('post', '/post/:id');
