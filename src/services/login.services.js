import http from "./http_common";

export async function signup(user) {

    return await http.post("/signup", user);
}

export async function userLogin(user) {

    return await http.post("/login", user);
}