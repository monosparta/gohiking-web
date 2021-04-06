import axios from "axios";
const demoapi = axios.create({
  baseURL: "http://minyen.monosparta.org/",
  headers: { "X-Secure-Code": "12345678", },
});
// baseURL: "http://2ea7aff8b84a.ngrok.io" ,
export default demoapi;
