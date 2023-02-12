/// <reference lib="webworker" />

addEventListener('message', ({data}) => {
  let sum = 0;
  // data = null; // for error
  for (let i = data.from; i < data.to; i++) {
    sum += i;
  }
  postMessage(sum);
});
