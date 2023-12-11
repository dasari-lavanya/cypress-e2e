const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  "reporterOptions": {
    "charts": true,
    "embeddedScreenshots": true,
    "inlineAssets": true
  },
  "video": true,
  e2e: {
    baseUrl:'https://naveenautomationlabs.com/opencart/index.php?route=common/home',
    //baseUrl:'https://naveenautomationlabs.com/opencart/index.php?route=account/login',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    /*url: 
    'https://naveenautomationlabs.com/opencart/index.php?route=account/register'*/
  },
  env: {
    URL: 'https://naveenautomationlabs.com/opencart/index.php?route=account/register' }
  
  

});
