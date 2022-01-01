import React, { useEffect } from "react";
import { toast } from "react-toastify";
import userService from "../services/userService";
export default function Logout(props) {
    async function handleCookie() {
        try {
            await userService.logout();
        } catch (ex) {
            toast.error(ex.response.data);
        }
    }
    useEffect(() => {
        handleCookie();
        window.location = "/";
    });
    return null;
}
