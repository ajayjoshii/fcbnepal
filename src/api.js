import axios from "axios";

const API_URL = "https://backend.fcbcnepal.com/backend/";

const API = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Categories
export const getCategories = () => {
  return API.get("categories/");
};

// Sermons
export const getSermons = () => {
  return API.get("sermons/");
};

// Positions
export const getPositions = () => {
  return API.get("positions/");
};

// Leaders
export const getLeaders = () => {
  return API.get("leaders/");
};

// Blogs
export const getBlogs = () => {
  return API.get("blogs/");
};

export default API;