import { useEffect, useState } from "react";
import { getallCategories } from "../services/categorie.services";
import { useNavigate, useParams } from "react-router-dom";
import { getPropertyById, updateProperty } from "../services/props.services";
import { getAllLoca } from "../services/locataire.services";


export function PropsEdit() {
    const [name, setName] = useState(""); //ce variable state c'est pour recuperer les donnees saisie dans les champs 
    const [selectedLoc, setSelectedLoc] = useState("");
    const [locataire,setLocataire]= useState([]);
    const [selectedCat, setSelectedCat] = useState(0);
    const [categories, setCategories] = useState([]);

    const { id } = useParams();

    useEffect(() => {

        fetchProps();
        fetchCategories();
        fetchLocataire();


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // hook qui execute un traitement apres chaque chargement de composant


    async function fetchProps() {
        const res = await getPropertyById(id);
        setName(res.data.name);
        setSelectedLoc(res.data.Name)
    }

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
        const p = { "name": name, "locataire": locataire[selectedLoc] ,"category": categories[selectedCat] };
        // await addProperty(p); // cette fonction est creer dans le dossier service 
        console.log(p)
        await updateProperty(p, id);
        navigate("/properties"); // 
    }

    ///////// pour stocke les donnees saisie dans les champs on utilise |onchange|
    return (
        <form onSubmit={e => handleForm(e)}>
            <br /><br />
            <div className="form-group">
                <label>Props NAME : </label>
                <input value={name} required className="form-control" type="text" onChange={e => setName(e.target.value)} />
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
                <label>Category : </label>
                <select className="form-control" onChange={e => setSelectedCat(e.target.value)}>
                    {categories.map((cat, index) => {
                        if (cat._id === selectedCat) {
                            return <option selected key="cat._id" value={index}>{cat.name}</option>
                        } else return <option value={index}>{cat.name}</option>

                    }
                    )}
                </select>
            </div>
            <br />

            <input className="btn btn-primary color-red" type="submit" value="Save Changes"/>
            <input className="btn btn-light" type="reset" value="Cancel" />
        </form>
    )
}