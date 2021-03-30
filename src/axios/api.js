import axios from "axios";
const demoapi = axios.create({
  baseURL: "http://032821d46847.ngrok.io/",
  headers: { "X-Secure-Code": "12345678", },
});
export default demoapi;
