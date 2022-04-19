const {
  noAsyncAwait0,
  asyncAwaitWithoutTry0,
  asyncAwaitWithTry0,
} = require('../level0');

const foo = async () => {
  try {
    await asyncAwaitWithTry0();
    await asyncAwaitWithoutTry0();
    await noAsyncAwait0();
  } catch (e) {
    console.error(e);
  }
};

foo();
