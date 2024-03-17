import { Outlet, NavLink } from "react-router-dom"
export function AdminLayout() {

    const token = localStorage.getItem("jwtToken");
    

    function logout(){
        localStorage.clear();
        window.location="/login"  // refrech properties without data acess
    }


    return (
        <>
            <header>
                <nav>
                    <ul className="nav nav-tabs">
                        {
                            token && (
                            <li className="nav-item" >
                                <NavLink to={"/properties"} className="nav-link">Propriété</NavLink>
                            </li>
                            )
                        }
                            
                        
                        {
                            !token && (
                                <>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/signup"}>inscription</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/login"}>connexion</NavLink>
                            </li>
                                </>
                            )
                        }

                        {
                            token && (
                            <li className="nav-item">
                                <NavLink className="nav-link" onClick={()=>logout()}>deconnection</NavLink>
                            </li>
                            )
                        }
                    </ul>
                </nav>
            </header>

            <main>
                <div className="container">
                    <Outlet />
                </div>
            </main>

            <footer>

            </footer>
        </>)


}