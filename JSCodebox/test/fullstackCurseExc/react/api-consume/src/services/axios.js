import axios from 'axios';
// process.env.BASE_URL
export default axios.create({
  baseURL: 'http://localhost:3001/'
});
