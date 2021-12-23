import http from "./httpSevice";

const apiUrl = "http://localhost:8000/api";
export async function register(user) {
    var data = new FormData();
    data.append("email", user.email);
    data.append("l_name", user.lname);
    data.append("f_name", user.fname);
    data.append("phone", user.phone);
    data.append("file", user.file);
    return await http.post(apiUrl + "/register", data);
}
export async function login(email, file) {
    var data = new FormData();
    data.append("email", email);
    data.append("file", file);
    return await http.post(apiUrl + "/login", data, { withCredentials: true });
}
export async function getUser() {
    try {
        const user = await http.get(apiUrl + "/user", {
            withCredentials: true,
        });
        console.log("in getuser", user);
        if (user.data.status === 403) return null;
        return user;
    } catch (ex) {
        return null;
    }
}
export async function logout() {
    const resp = await http.post(apiUrl + "/logout", { withCredentials: true });
    const data = await getUser();
    return true;
}
export default {
    register,
    login,
    getUser,
    logout,
};
