const level1Foo = require('./level1');

const foo = async () => {
  try {
    await level1Foo();
  } catch (e) {
    console.error(e);
  }
};

foo();
