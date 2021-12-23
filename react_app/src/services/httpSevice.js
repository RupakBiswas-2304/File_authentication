import axios from "axios";

axios.interceptors.response.use(null, (error) => {
    const exp =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
    if (!exp) console.log("unexpected error");
    else console.log("expected error");
    return Promise.reject(error);
});

export default {
    post: axios.post,
    get: axios.get,
    delete: axios.delete,
    put: axios.put,
};
