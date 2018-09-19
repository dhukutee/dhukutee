var firebase = require("firebase");

// firbase config object
var config = {
  apiKey: "AIzaSyC1kIcWFwmYyx5341_mdiw4gpxGBTVWtus",
  authDomain: "dhukutee.firebaseapp.com",
  databaseURL: "https://dhukutee.firebaseio.com",
  projectId: "dhukutee",
  storageBucket: "dhukutee.appspot.com",
  messagingSenderId: "142116528194"
};

// preventing multiple intilization attempts on server
// we might have to shift to admin SDK
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

// add a blog detail from the firebase database
export function addABlog(blog) {
  return firebase
    .database()
    .ref("blogs/" + blog.url)
    .set(blog);
}

// gets the blog detail from the firebase database with provided slug
export function getABlog(slug) {
  return firebase
    .database()
    .ref("blogs/" + slug)
    .once("value")
    .then(function(snapshot) {
      return snapshot.val();
    });
}

export async function uploadFile (file) {
  var storageRef = firebase.storage().ref()
  var imageRef = storageRef.child(`images/${file.name}`)
  await imageRef.put(file)
  return imageRef.fullPath
}

export function getDownloadUrl (ref) {
  if (ref != null && ref != '') { return firebase.storage().ref().child(ref).getDownloadURL() } else return ''
}

// get all blogs from the database, in future we can pull blogs with tag homepage
export async function getAllBlog() {
  const snapshot = await firebase
    .database()
    .ref("blogs")
    .once("value");
  const blogs = [];
  snapshot.forEach(blog => {
    blogs.push(blog.val());
  });
  return blogs;
}

// returns the value of the provided path from firebase database
export async function getValueAt(path) {
  const snapshot = await firebase
    .database()
    .ref(path)
    .once("value");
  return snapshot.val();
}

export function login(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

export function isLoggedIn(func) {
  firebase.auth().onAuthStateChanged(user => func(user));
}

export function logOut() {
  firebase.auth().signOut();
}
