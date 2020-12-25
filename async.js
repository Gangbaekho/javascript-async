// Async code example
console.log("start");

// Javascript는 동시다발적으로 일을 할 수 없다.
// Single Thread 여서 그런것 같은데 그렇기 때문에
// 이러한 setTimeout의 기능을 Web apis로 전달한다.
// 그러면 브라우저가 2000ms를 세서 그 다음에
// javascript의 call stack으로 setTimeout을 넘겨서
// 실행시키게 하는 메커니즘을 가지고 있다.

// setTimeout에 들어가는 function을 callback function이라고 하는데
// 이러한 callback function은 항상 async에서만 사용하는게 아니라는 것만
// 주의해서 기억해두도록 하자.

setTimeout(() => {
  console.log("We are in the timeout");
}, 2000);

const items = [1, 2, 3, 4, 5];

// forEach에 인자로 들어가는 것도 callback function이다.
items.forEach((item) => {
  console.log(item);
});

console.log("end");
