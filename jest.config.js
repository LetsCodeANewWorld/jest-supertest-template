module.exports = {
    //rootDir: '../',
    verbose: false,
    reporters: ['default', 'jest-allure'],
    testEnvironment: 'node',
    setupFilesAfterEnv: ['./config/framework.setuplib'],
   };
