// Problem Statement -
// Implement a function that takes a list of async functions as input and a
// callback function and executes the input tasks in parallel i.e all at once
// and invokes the callback after every task is finished.
// Example
// Input:
// executeParallel(
// [asyncTask(3), asyncTask(1), asyncTask(2)],
// (result) => { console.log(result);});
// Output:
// [2, 1, 3]

const asyncTask = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("num :" + num);
    }, 1000);
  });
};
task = [];
const executeParallel = (task, result) => {
  res = [];
  task.forEach((ele, idx) => {
    ele.then((val) => {
      res.push(val);
      if (idx === task.length - 1) {
        result(res);
      }
    });
  });
};

executeParallel([asyncTask(3), asyncTask(1), asyncTask(2)], (result) => {
  console.log(result);
});
