import { NavLink  ,Link } from "react-router-dom"
export default function Navbar() { 
    return (
        <nav className="nav">
            <div className="container">

            <Link to="/" > Logo </Link>
            <ul className="nav-list">
                <li> <NavLink to="/" >home</NavLink> </li>
                <li> <NavLink to="/about" >about</NavLink> </li>
            </ul>
            </div>
        </nav>
    )
}