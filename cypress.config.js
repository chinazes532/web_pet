const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  e2e: {
    setupNodeEvents(on, config) {
    },
    screenshotsFolder: 'cypress/screenshots', 
    videosFolder: 'cypress/videos',          
    screenshotOnRunFailure: true,           
    screenshotOnRunPass: false,               
    video: true,                              
    videoUploadOnPasses: false,               
  },
});
