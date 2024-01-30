import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container d-flex justify-content-center">

                    <NavLink className="btn btn-tertiary mx-2" to="/">Ya son 10 Meses</NavLink>
                    <NavLink className="btn btn-tertiary mx-2" to="/vivido">¿Que hemos vivido?</NavLink>

                </div>
            </nav>


        </>
    )
}
export default Navbar;