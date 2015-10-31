export function initialize(application) {
  application.inject('route', 'cookie', 'cookie:main');
  application.inject('controller', 'cookie', 'cookie:main');
  application.inject('service', 'cookie', 'cookie:main');
}

export default {
  name: 'inject-cookie',
  initialize: initialize,
};
