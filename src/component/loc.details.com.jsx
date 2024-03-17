import { useState } from "react"
import { getAllProps,  } from "../services/props.services";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function LocDetails(){
    const [property,setProperty]=useState({});    
    const { id } = useParams();
    useEffect(()=>{
        fetchProps();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);


    async function fetchProps(){
        const prop = await getAllProps();
        const finded = prop.data.find((pr)=>pr._id === id);
        if(finded){
            setProperty(finded);
        }
    }
    
    


    

    return(
        <>
        <br />
        <br />
        <h1>Détails des propriété</h1>
        <br />

        <table className="table table-bordered">
        <thead>
        <tr>
          <th>Entete</th>
          <th>Donnees</th>
        </tr>
        </thead>
        {Object.keys(property).length !== 0 &&  // to know if the object is empty or not
            <tbody key={property._id}>
            <tr >
                <td >nom du propriété</td>
                <td>{property.name}</td>
            </tr>
            <tr>
                <td>Nom du locataire</td>
                <td>{property.locataire.Name}</td>
            </tr>
            <tr>
                <td>Adresse de locataire</td>
                <td>{property.locataire.Adress}</td>
            </tr>
            <tr>
                <td>Num de locataire</td>
                <td>{property.locataire.Number}</td>
            </tr>
            <tr>
                <td>Carte d'identité</td>
                <td>{property.locataire.ID}</td>
            </tr>
            <tr>
                <td></td>
            </tr>
            </tbody>
        }

      
            
        </table>
        </>
    )
}