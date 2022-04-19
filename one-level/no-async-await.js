const { noAsyncAwait0, noAsyncAwait1, noAsyncAwait2 } = require('../level0');

const foo = async () => {
  try {
    await noAsyncAwait0();
    await noAsyncAwait1();
    await noAsyncAwait2();
  } catch (e) {
    console.error(e);
  }
};

foo();
