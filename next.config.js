const withPlugins = require('next-compose-plugins');
const plugins = require('./config/plugins');


module.exports = withPlugins(plugins);
