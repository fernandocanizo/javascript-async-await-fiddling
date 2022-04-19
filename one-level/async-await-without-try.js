const { asyncAwaitWithoutTry0,
  asyncAwaitWithoutTry1,
  asyncAwaitWithoutTry2,
} = require('../level0');

const foo = async () => {
  try {
    await asyncAwaitWithoutTry0();
    await asyncAwaitWithoutTry1();
    await asyncAwaitWithoutTry2();
  } catch (e) {
    console.error(e);
  }
};

foo();
