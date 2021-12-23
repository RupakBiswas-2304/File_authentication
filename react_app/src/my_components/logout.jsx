import React, { useEffect } from "react";
import { useRef } from "react";
import { useCookies } from "react-cookie";
import userService from "../services/userService";
export default function Logout(props) {
    const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
    async function handleCookie() {
        await userService.logout();
    }
    useEffect(() => {
        handleCookie();
        window.location = "/";
    });
    return null;
}
