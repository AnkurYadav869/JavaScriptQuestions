// Problem Statement -
// Implement a function in JavaScript that retries promises N number of
// times with a delay between each call.
// Example
// Input:
// retry(asyncFn, retries = 3, delay = 50, finalError = 'Failed');
// Output:
// ... attempt 1 -> failed
// ... attempt 2 -> retry after 50ms -> failed
// ... attempt 3 -> retry after 50ms -> failed
// ... Failed.
const asyncFn = () => {
  return new Promise((resolve, reject) => {
    reject("failed");
  });
};
const retry = (asyncFn, retries, delay, finalError) => {
  for (let index = 0; index < retries; index++) {
    setTimeout(async () => {
      try {
        await asyncFn();
      } catch (e) {
        console.log(e);
        if (index === retries - 1) {
          console.log(finalError);
        }
      }
    }, delay);
  }
};

retry(asyncFn, (retries = 3), (delay = 50), (finalError = "Failed"));
