console.log("start");

function loginUser(email, password) {
  // 시간을 걸리게 하기 위해서, 즉 async 처럼 동작하도록
  // 하기 위한 trick이라고 생각하면 된다 setTimeout 이라는 것은.
  setTimeout(() => {
    console.log("Now we have a data");
    return { userEmail: email };
  }, 1500);
}

// 이렇게 하면은 1.5초가 지나지 않아서 user는 return을 받지 못한다는 것임.
// 즉 시간이 걸리는 일을 sync 처럼 동작하게 하면은 원하는 결과를 얻지 못한다는 것임.
const user = loginUser("example@google.com", "test");
console.log(user);

console.log("end");
