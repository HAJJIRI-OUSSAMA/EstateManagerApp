import axios from 'axios'
// AXIOS 1 : creation d'un instance axios qu'on vas l utiliser dans tout le projet
const http = axios.create({
    baseURL:"http://localhost:5000",// presiser l'URL de base (tout les requette envoyer son URL de base est "http://localhost:5000" )
    headers:{"Content-Type":"application/json"} // presiser les entete de la requette 
});

export default http;