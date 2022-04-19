const noAsyncAwait0 = () => Promise.reject(new Error('Something failed'));
const noAsyncAwait1 = () => Promise.reject(new Error('Something failed'));
const noAsyncAwait2 = () => Promise.reject(new Error('Something failed'));

const asyncAwaitWithoutTry0 = async () =>
  await Promise.reject(new Error('Something failed'));

const asyncAwaitWithoutTry1 = async () =>
  await Promise.reject(new Error('Something failed'));

const asyncAwaitWithoutTry2 = async () =>
  await Promise.reject(new Error('Something failed'));

// rethrow it's unnecessary
const asyncAwaitWithTry0 = async () => {
  try {
    await Promise.reject(new Error('Something failed'));
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const asyncAwaitWithTry1 = async () => {
  try {
    await Promise.reject(new Error('Something failed'));
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const asyncAwaitWithTry2 = async () => {
  try {
    await Promise.reject(new Error('Something failed'));
  } catch (e) {
    console.error(e);
    throw e;
  }
};

module.exports = {
  noAsyncAwait0,
  noAsyncAwait1,
  noAsyncAwait2,
  asyncAwaitWithoutTry0,
  asyncAwaitWithoutTry1,
  asyncAwaitWithoutTry2,
  asyncAwaitWithTry0,
  asyncAwaitWithTry1,
  asyncAwaitWithTry2,
};
