const { getConfig } = require('@graphql-ez/testing-new/jestConfig');

module.exports = getConfig({
  nextjs: ['test/nextjs'],
});
