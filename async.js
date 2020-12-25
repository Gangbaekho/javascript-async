// Async code example
console.log("start");

// Javascript는 동시다발적으로 일을 할 수 없다.
// Single Thread 여서 그런것 같은데 그렇기 때문에
// 이러한 setTimeout의 기능을 Web apis로 전달한다.
// 그러면 브라우저가 2000ms를 세서 그 다음에
// javascript의 call stack으로 setTimeout을 넘겨서
// 실행시키게 하는 메커니즘을 가지고 있다.

setTimeout(() => {
  console.log("We are in the timeout");
}, 2000);

console.log("end");
