const {
  asyncAwaitWithTry0,
  asyncAwaitWithTry1,
  asyncAwaitWithTry2,
} = require('../level0');

const foo = async () => {
  try {
    await asyncAwaitWithTry0();
    await asyncAwaitWithTry1();
    await asyncAwaitWithTry2();
  } catch (e) {
    console.error(e);
  }
};

foo();
