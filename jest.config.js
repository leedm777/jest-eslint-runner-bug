module.exports = {
  projects: [
    {
      displayName: 'test',
      testEnvironment: 'node',
    },
    {
      displayName: 'eslint',
      testEnvironment: 'node',
      runner: 'jest-runner-eslint',
      testMatch: ['<rootDir>/**/*.js']
    }
  ]
};
