exports.config = {
  capabilities: {
    'browserName': 'chrome' 
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['specs/spec.js']
};