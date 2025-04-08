import axios from "axios";

const wordpressApi = axios.create({
  baseURL: "http://localhost/wordpress/wp-json/wp/v2",
  headers: {
    "Content-Type": "application/json",
  },
});
