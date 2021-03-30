import axios from "axios";
const demoapi = axios.create({
  baseURL: "http://84975577402d.ngrok.io/",
  headers: { "X-Secure-Code": "12345678", },
});
export default demoapi;
