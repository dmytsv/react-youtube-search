import axios from "axios";
const KEY = "AIzaSyC3keBcgBA-3nV65cq0J56nnq-qBfy0aSc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 25,
    key: KEY
  }
});
