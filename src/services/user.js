import api from "configs/api.js";

const getProfile = () => api.get("user/whoami").then((res) => res || false);

export { getProfile };
