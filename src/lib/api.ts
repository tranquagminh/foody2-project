import axios from "axios";

const wordpressApi = axios.create({
  baseURL: "http://localhost/wordpress/wp-json/wp/v2",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function fetchWordPressAPI(endpoint: string) {
  try {
    const response = await wordpressApi.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data from WordPress API:", error);
    throw error;
  }
}
