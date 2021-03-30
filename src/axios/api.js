import axios from "axios";
const demoapi = axios.create({
  baseURL: "http://fbfde1cfc72a.ngrok.io/",
  headers: { "X-Secure-Code": "12345678", },
});
export default demoapi;
