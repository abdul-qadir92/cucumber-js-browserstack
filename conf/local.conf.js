exports.config = {
  user: 'BROWSERSTACK_USERNAME',
  key: 'BROWSERSTACK_ACCESS_KEY',
  server: 'hub-cloud.browserstack.com',

  capabilities: [{
    browserName: 'chrome',
    name: "local_test",
    project: "Cucumber-js-browserstack",
    build: "cucumber-js-browserstack",
    "browserstack.debug" : "true",
    "browserstack.networkLogs" : "true",
    'browserstack.local': true
  }]
}
