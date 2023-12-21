import axios from "axios";

const instance = axios.create({
    // baseURL: 'http://127.0.0.1:5001/clone-6fc62/us-central1/api'
    baseURL: 'https://amazon-clone-backend-pi.vercel.app/'
});


export default instance;