console.log("start");

// Promise를 return 한다는게 핵심이 되는 것이다.

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("now we have the data");
      resolve({ userEmail: email });
    }, 3000);
  });
}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["video1", "video2", "video3"]);
    }, 2000);
  });
}

function videoDetails(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("title of the video");
    }, 2000);
  });
}

loginUser("test@gmail.com", "test-password")
  .then((user) => getUserVideos(user.email))
  .then((videos) => videoDetails(videos[0]))
  .then((detail) => console.log(detail));

console.log("finish");

const yt = new Promise((resolve) => {
  setTimeout(() => {
    console.log("getting stuff from youtube");
    resolve({ video: [1, 2, 3, 4, 5] });
  }, 2000);
});

const fb = new Promise((resolve) => {
  setTimeout(() => {
    console.log("getting stuff from facebook");
    resolve({ user: ["name1", "name2", "name3"] });
  }, 2000);
});

Promise.all([yt, fb]).then((result) => console.log(result));

async function displayUser() {
  try {
    const loggedUser = await loginUser("ed", 12345);
    const videos = await getUserVideos(loggedUser.userEmail);
    const detail = await videoDetails(videos[0]);
    console.log(detail);
  } catch (err) {
    console.log("we could not get the video infos");
  }
}

displayUser();
