// Problem Statement -
// Implement a function that takes a list of async functions as input and
// executes them in a series that is one at a time. The next task is
// executed only when the previous task is completed.
// Example
// Input:
// [
// asyncTask(3),
// asyncTask(1),
// asyncTask(2)
// ]
// Output:
// 3
// 1
// 2

const asyncTask = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("num :" + num);
    }, 1000);
  });
};

const promises = [asyncTask(3), asyncTask(1), asyncTask(2)];

const asyncInSeries = () => {
  promises.forEach(async (curr) => {
    const data = await curr;
    console.log(data);
  });
};

asyncInSeries()
