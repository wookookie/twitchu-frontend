import axios from "axios";

export default axios.create({
  baseURL: `http://${window.location.hostname}:8080`,
  withCredentials: true,
});
