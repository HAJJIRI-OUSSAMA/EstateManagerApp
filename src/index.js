// import React , {useState}from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

// JSX
// function PropsList(props) {
//   const [nom, setNom] = useState("");
//   const [prix, setPrix] = useState("");
//   const [quantite, setQuantite] = useState("");
//   const [produits, setProduits] = useState([]);
//   const [editingIndex, setEditingIndex] = useState(-1);
//   const [searchTerm, setSearchTerm] = useState("");

//   function handleForm(e) {
//     e.preventDefault();
//     const newProduct = { nom, prix, quantite };

//     if (editingIndex >= 0) {
//       const updatedproperties = produits.map((p, index) =>
//         index === editingIndex ? newProduct : p
//       );
//       setProduits(updatedproperties);
//       setEditingIndex(-1); 
//     } else {
//       setProduits([...produits, newProduct]);
//     }
//     setNom("");
//     setPrix("");
//     setQuantite("");
//   }

//   function handleReset() {
//     setNom("");
//     setPrix("");
//     setQuantite("");
//     setEditingIndex(-1);
//   }

//   function editProduit(index) {
//     setNom(produits[index].nom);
//     setPrix(produits[index].prix);
//     setQuantite(produits[index].quantite);
//     setEditingIndex(index);
//   }

//   function supprimerProduit(index) {
//     const updatedproperties = produits.filter((i) => i !== index);
//     setProduits(updatedproperties);
//   }
// 
//   function searchproperties() {
//     return produits.filter(
//       (p) =>
//         p.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         p.prix.toString().includes(searchTerm) ||
//         p.quantite.toString().includes(searchTerm)
//     );
//   }

//   const displayedproperties = searchTerm ? searchproperties() : produits;

//   return (
//     <>
//       <div className="center p-2 text-bg-secondary">CRUD OPERATIONS</div>
//       <br/>
//       <input
//         className='form-control w-50 mt-2 searchbar'
//         placeholder='Chercher par Nom, Prix , Quantité'
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <form onSubmit={handleForm} onReset={handleReset} className="container w-50 mt-5 border border-secondary rounded alert">
//         <label htmlFor="nom">Nom</label>
//         <input
//           className='form-control'
//           placeholder='Entrer le nom de produit'
//           type="text"
//           id="nom"
//           value={nom}
//           onChange={(e) => setNom(e.target.value)}
//         />
//         <br />
//         <label htmlFor="prix">Prix</label>
//         <input
//           className='form-control'
//           placeholder='Entrer le prix de produit'
//           type="number"
//           id="prix"
//           value={prix}
//           onChange={(e) => setPrix(e.target.value)}
//         />
//         <br />
//         <label htmlFor="quantite">Quantité</label>
//         <input
//           className='form-control'
//           placeholder='Entrer la quantite'
//           type="number"
//           id="quantite"
//           value={quantite}
//           onChange={(e) => setQuantite(e.target.value)}
//         />
//         <br />
//         <input className='btn btn-success form-control' type="submit" value='Enregistrer' />
//         <br />
//         <br />
//         <input className='btn btn-secondary form-control' type="reset" value='Annuler' />
//       </form>
//       <table className="container w-50 mt-5 border border-secondary table rounded alert">
//         <thead>
//           <tr>
//             <th>Nom</th>
//             <th>Prix</th>
//             <th>Quantité</th>
//             <th>Supprimer</th>
//             <th>Modifier</th>
//           </tr>
//         </thead>
//         <tbody>
//           {displayedproperties.map((p, index) => (
//             <tr key={index}>
//               <td>{p.nom}</td>
//               <td>{p.prix}</td>
//               <td>{p.quantite}</td>
//               <td>
//                 <button className='btn btn-danger' onClick={() => supprimerProduit(index)}>
//                   Supprimer
//                 </button>
//               </td>
//               <td>
//                 {editingIndex === index ? (
//                   <button className='btn btn-success' onClick={handleForm}>
//                     Save
//                   </button>
//                 ) : (
//                   <button className='btn btn-secondary' onClick={() => editProduit(index)}>
//                     Modify
//                   </button>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
  
// }
  

  

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);

