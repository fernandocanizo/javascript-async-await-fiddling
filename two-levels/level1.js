const { noAsyncAwait0 } = require('../level0');

const foo = async () => await noAsyncAwait0();

module.exports = foo;
