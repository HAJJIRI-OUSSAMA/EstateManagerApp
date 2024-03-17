import http from "./http_common"; //instance de axios

export async function getallCategories(){
    return await http.get("/categories"); // recuperation des categories
}

export async function addCategories(category){
    return await http.post("/categories",category); // recuperation des categories
}