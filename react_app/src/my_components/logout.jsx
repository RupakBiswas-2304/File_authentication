import React, { useEffect } from "react";
import userService from "../services/userService";
export default function Logout(props) {
    async function handleCookie() {
        await userService.logout();
        console.log("logout component -> logout");
    }
    useEffect(() => {
        handleCookie();
        window.location = "/";
    });
    return null;
}
