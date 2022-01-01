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
        return user.data.message;
    } catch (ex) {
        return null;
    }
}
export async function logout() {
    await http.post(apiUrl + "/logout", { withCredentials: true });
    return true;
}
export async function updateUser(user) {
    var data = new FormData();
    data.append("f_name", user.f_name);
    data.append("l_name", user.l_name);
    data.append("phoneno", user.phoneno);
    try {
        await http.post(apiUrl + "/profile", data, {
            withCredentials: true,
        });
    } catch (ex) {
        console.log("ERROR WHILE UPDATING USER");
    }
}
export default {
    register,
    login,
    getUser,
    logout,
    updateUser,
};
