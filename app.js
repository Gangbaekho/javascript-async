console.log("start");

// 지금까지는 성공 케이스만 다뤘찌만, api의 특성상
// 실패할 경우에 대해서도 코드를 써줘야 한다는 말임.
// 그런데 이럴경우 모든 경우마다 onSuccess와 onFailure를 써야 한다는 말이니까
// 일일히 써주기도 어려울 뿐만 아니라 너무 복잡해진다는 것이다.
// 그렇기 떄문에 Promise라는 것을 배우게 된다는 것임.
function loginUser(email, password, onSuccess, onFailure) {
  setTimeout(() => {
    console.log("Now we have a data");
    onSuccess({ userEmail: email });
  }, 1500);
}

function getUserVideos(email, callback) {
  setTimeout(() => {
    callback(["video1", "video2", "video3"]);
  }, 1000);
}

function videoDetails(video, callback) {
  setTimeout(() => {
    callback("title of the video");
  }, 2000);
}

const user = loginUser("example@google.com", "test", (user) => {
  console.log(user);
  getUserVideos(user.userEmail, (videos) => {
    console.log(videos);
    videoDetails(videos[0], (description) => {
      console.log(description);
    });
  });
});

console.log("end");
