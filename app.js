console.log("start");

function loginUser(email, password, callback) {
  // return을 하는 것이 아니라, 원하는 process가 끝날떄
  // 새로운 function을 call하고 있다. 이러한 것을 callback function이라고
  // 이해를 하면 되겠음. 즉 해결 방법을 callback에서 찾고 있다는 것임.

  setTimeout(() => {
    console.log("Now we have a data");
    callback({ userEmail: email });
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
