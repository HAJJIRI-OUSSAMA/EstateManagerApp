import http from "./http_common";

export async function getAllLoca(){
    return await http.get("/locataire");
}

export async function addLoca(locataire){
    return await http.post("/locataire",locataire);
}

export async function getLocataireById(idP) {
    return await http.get(`/Locataire/${idP}`);
}