import { useEffect, useState } from "react";
import '../index.css';
import { deletePropertyById, getAllProps } from "../services/props.services";
// import axios from 'axios'
import { NavLink ,Link } from "react-router-dom";



export function PropsList() { // un composant

  const [properties, setproperties] = useState([]);
  // const http = axios.create({}); // creation instance axios

  useEffect(() => {
    fetchproperties();
    // execute apres chaque affichage de composant 
  }, []); //les "[]" pour ne pas entrer dans une boucle infinie
  async function fetchproperties() {
    // const resp = http.get("http:localhost:5000/properties");
    const resp = await getAllProps();
    if(resp.status === 200){
      setproperties(resp.data);
    }
    
    // const token = localStorage.getItem("jwtToken")
    // console.log("Token  :" + token);
  }

  async function deleteProperty(idP) {
    await deletePropertyById(idP); // a partir de service
    fetchproperties();
  }

  return (<>
  <br /><br />
  <button className="btn btn-dark">
  <Link  to={"/properties/new"}>Ajout d'une nouvelle propriété</Link>
  </button>
    <br />
    <br />
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>image</th>
          <th>Nom</th>
          <th>Categorie</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        
        {properties.map((p) => (
          <tr key={p._id}>
            <td><img width={150} height={150} src={"http://localhost:5000" + p.image} alt={p.name} /></td>
            <td>{p.name}</td>
            <td>{p.category.name}</td>

            <td><button className="btn" onClick={() => deleteProperty(p._id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash2-fill" viewBox="0 0 16 16">
              <path d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z" />
            </svg></button>
              <Link className="btn" to={`/properties/edit/${p._id}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                </svg>
              </Link>
              <NavLink className="btn btn-dark" to={`/properties/details/${p._id}`}>Details</NavLink>
                            {/* <button className="btn btn-dark" >details</button> */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    
  </>
  );
}