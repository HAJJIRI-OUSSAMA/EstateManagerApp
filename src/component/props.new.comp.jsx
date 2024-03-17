import { useEffect, useState } from "react"
import { addProperty } from "../services/props.services";
import { useNavigate } from "react-router-dom";
import { getallCategories } from "../services/categorie.services";
import { getAllLoca } from "../services/locataire.services";


export function PropsNew() { //l'ajout de nouveau produit => return(afficher) un formulaire
    const [name, setName] = useState(""); //ce variable state c'est pour recuperer les donnees saisie dans les champs 
    const [selectedLoc, setSelectedLoc] = useState("");
    const [locataire,setLocataire]= useState([]);
    const [selectedCat, setSelectedCat] = useState(0);
    const [propertyImage, setpropertyImage] = useState(null);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories();
        fetchLocataire();
    }, []); // hook qui execute un traitement apres chaque chargement de composant

    async function fetchCategories() {
        const res = await getallCategories();
        setCategories(res.data);
    }

    async function fetchLocataire(){
        const res = await getAllLoca();
        setLocataire(res.data);
    }

    const navigate = useNavigate();

    async function handleForm(e) { // fonction qui vat traiter le formulaire 
        e.preventDefault(); // pour eviter d'actualiser le formulaire a chaque fois
        const p = { "name": name, "locataire":locataire[selectedLoc] , "category": categories[selectedCat] };
        const formData = new FormData();
        formData.append("propsData", JSON.stringify(p));
        formData.append("propertyImage", propertyImage);
        // await addProperty(p); // cette fonction est creer dans le dossier service 
        await addProperty(formData);
        navigate("/properties"); // 
    }

    ///////// pour stocke les donnees saisie dans les champs on utilise |onchange|
    return (
        <form onSubmit={e => handleForm(e)} >
            <br /><br />
            <div className="form-group">
                <label>Property NAME : </label>
                <input required className="form-control" type="text" onChange={e => setName(e.target.value)} />
            </div>
            <br />

            <div className="form-group">
                <label>Locataire : </label>
                <select className="form-control" onChange={e => setSelectedLoc(e.target.value)}>
                    {locataire.map((loc, index) => <option key={index} value={index}>{loc.Name}</option>)}
                </select>
            </div>

            <br />
            <div className="form-group">
                <label>category : </label>
                <select className="form-control" onChange={e => setSelectedCat(e.target.value)}>
                    {categories.map((cat, index) => <option key={index} value={index}>{cat.name}</option>)}
                </select>
            </div>
            <br />
            <div className="form-group">
                <label>property Image : </label>
                <input type="file" className="form-control"
                    onChange={e => setpropertyImage(e.target.files[0])} />
            </div>
            <br />

            <input className="btn btn-dark" type="submit" value="Add" />
            <input className="btn btn-light" type="reset" value="Cancel" />
        </form>
    );
}