import axios from "axios";

const instance = axios.create({
    baseURL: 'https://amazon-backend-june24.cyclic.app'
    // baseURL: 'http://127.0.0.1:5001/clone-6fc62/us-central1/api'
    // baseURL: 'http://localhost:10000'
});


export default instance;