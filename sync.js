// Sync code example
// Sync 이기 때문에 call stack에 차례대로 쌓인다음에,
// Pop 되는 형식이다.

function otherFunct() {
  console.log("we are in another funct");
  console.log("do some stuff");
}

console.log("Start");

otherFunct();

console.log("End");
