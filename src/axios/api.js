import axios from "axios";
const demoapi = axios.create({
  baseURL: "http://2ea7aff8b84a.ngrok.io",
  headers: { "X-Secure-Code": "12345678", },
});
export default demoapi;
