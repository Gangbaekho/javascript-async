// 기존에 했던 것을 promise라는 객체를 통해
// 좀 더 쉽게 사용할 수 있다는 것임.
// resolve와 reject, then, catch를 이용해서 말이다.

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("got the user");
    // resolve({ user: "ed" });
    reject(new Error("User not logged in"));
  }, 2000);
});

promise
  .then((user) => {
    console.log(user);
  })
  .catch((err) => {
    console.log(err);
  });
