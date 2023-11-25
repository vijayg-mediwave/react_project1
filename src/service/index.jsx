import axios from "axios";

//Creating an instance
const instance = axios.create({
    baseURL: 'https://www.reddit.com/r/reactjs.json',
    timeout: 2000,
    headers: {
        'Content-Type': 'application/json'
      }
});


export default instance