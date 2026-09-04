// import axios from "axios";

// const API_URL = "https://backend.fcbcnepal.com/backend/";

// const API = axios.create({
//   baseURL: API_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Categories
// export const getCategories = () => {
//   return API.get("categories/");
// };

// // Sermons
// export const getSermons = () => {
//   return API.get("sermons/");
// };

// // Positions
// export const getPositions = () => {
//   return API.get("positions/");
// };

// // Leaders
// export const getLeaders = () => {
//   return API.get("leaders/");
// };

// // Blogs
// export const getBlogs = () => {
//   return API.get("blogs/");
// };

// export default API;






import axios from "axios";

const API_URL = "https://backend.fcbcnepal.com/backend/";

const API = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});



// API.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("adminToken");

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("adminToken");

    if (token) {
      config.headers["access-token"] = token;
    }

    return config;
  },
  (error) => Promise.reject(error)
);


export const getCategories = () => {
  return API.get("categories/");
};

export const getSermons = () => {
  return API.get("sermons/");
};

export const createSermon = (data) => {
  return API.post("blogs/sermons/", data);
};

export const updateSermon = (id, data) => {
  return API.put(`sermons/${id}/`, data);
};

export const deleteSermon = (id) => {
  return API.delete(`sermons/${id}/`);
};

export const getPositions = () => {
  return API.get("positions/");
};

export const getLeaders = () => {
  return API.get("leaders/");
};

export const createLeader = (data) => {
  return API.post("leaders/", data);
};

export const updateLeader = (id, data) => {
  return API.put(`leaders/${id}/`, data);
};

export const deleteLeader = (id) => {
  return API.delete(`leaders/${id}/`);
};

export const getBlogs = () => {
  return API.get("blogs/");
};

export const createBlog = (data) => {
  return API.post("blogs/", data);
};

export const updateBlog = (id, data) => {
  return API.put(`blogs/${id}/`, data);
};

export const deleteBlog = (id) => {
  return API.delete(`blogs/${id}/`);
};

export default API;