//Homework
//Create multiple promise , callbacks and consume them

new Promise(resolveOuter => {
  resolveOuter(
    new Promise(resolveInner => {
      setTimeout(resolveInner, 1000);
    }),
  );
});

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise');
  }, 1000);
});
