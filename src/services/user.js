import api from "configs/api.js";
import { getCookie } from "../utils/cookie";

const token = getCookie("accessToken");

const getProfile = () => api.get("user/whoami");

export { getProfile };
