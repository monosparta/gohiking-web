import axios from "axios";
const demoapi = axios.create({
  baseURL: "http://minyen.monosparta.org/",
  headers: { "X-Secure-Code": "12345678", },
});
export default demoapi;
