import axios from "axios";

// move all things related to unsplash out of our App and into here.

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ",
  },
});
