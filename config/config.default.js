/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1581173903069_1800';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    token: '101545',
    appid:'wx6f193deb88cd917d',
    encodingAESKey: 'Jq47P58S5nWD5SzX0sbyQetDAIRtZx1avAo1KxoSezJ'
  };

  return {
    ...config,
    ...userConfig,
  };
};
