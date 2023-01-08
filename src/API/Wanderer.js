import axios from "axios";
import * as SecureStore from "expo-secure-store";

export default axios.create({
  baseURL: "https://wanderer-server-git-main-ahsanrana023.vercel.app/",
});

// UserAPI.interceptors.request.use(async function(config) {
//   const token = await SecureStore.getItemAsync("access_token");
//   if (!token) return config;

//   config.headers["Authorization"] = token;

//   return config;
// });
