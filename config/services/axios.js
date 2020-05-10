import { address} from '@/config/constants'
import axios from "axios";

let Api = axios.create({
  baseURL: address.apiUrl
});
 
Api.defaults.withCredentials = true;

export default Api;