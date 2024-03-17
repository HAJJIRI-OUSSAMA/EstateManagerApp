import http from "./http_common";

const token = localStorage.getItem("jwtToken");

// AXIOS 2 : importation de l'instance axios depuis http_common

export async function getAllProps() {
    //envoie une requette a la partie backend pour recuperer 
    //  la liste des produits avec "Bibliotheque AXIOS" 
    return await http.get("/properties", {
        headers: { "Authorization": token },
        validateStatus: status => (status >= 200 && status < 500)
        });
}

export async function getPropertyById(id) {
    return await http.get(`/properties/${id}`, {
        headers: { "Authorization": token },
    });
}

export async function addProperty(p) {
    return await http.post("/properties", p, {
        headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": token
        }
    });

}

export async function updateProperty(p, id) {
    return await http.patch(`/properties/${id}`, p, {
        headers: { "Authorization": token },
    });
}

export async function deletePropertyById(idP) {
    return await http.delete(`/properties/${idP}`, {
        headers: { "Authorization": token },
    });
}