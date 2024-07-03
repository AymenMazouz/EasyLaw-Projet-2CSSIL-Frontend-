const API_INFO = {
  BASE_URL: "http://localhost:5000/",
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
  },
  USERS: {
    GET_ALL: "/users",
    GET_USER_BY_ID: (userId: string) => `/users/${userId}`,
  },
};

export default API_INFO;
