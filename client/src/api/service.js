import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:5555/api"
  // withCredentials: true // => you might need this when having the users in the app
});

const errorHandler = err => {
  // console.error(err);
  throw err;
};

export default {
  service,

  handleUpload(theFile) {
    // console.log('file in service: ', theFile)
    return service
      .post("/upload", theFile)
      .then(res => res.data)
      .catch(errorHandler);
  },

  saveNewImage(newImage) {
    // console.log('new thing is: ', newThing)
    return service
      .post("/things/create", newImage)
      .then(res => res.data)
      .catch(errorHandler);
  }
};

const login = (username, password) =>
  axios
    .post("/auth/login", { username: username, password: password })
    .then(response => response.data);

const signup = (username, password) =>
  axios
    .post("/auth/signup", { username: username, password: password })
    .then(response => response.data);

const logout = () =>
  axios.post("/api/auth/logout").then(response => response.data);

export { login, logout, signup };
