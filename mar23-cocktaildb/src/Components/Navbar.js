import React from "react";
import Logo from "./Innerpages/Logo.svg"
import { Link } from "react-router-dom";
const Navbar = ()=>{
    return(
        <div className="nav-bar">
            <div className="nav-logo">
                <Link to="/">
                <img src={Logo} alt="Cocktail-DB" className="logo"/>
                </Link>
            </div>
            <div className="pages">
                <div>
            <Link to="/" className="nav-link link1">Home</Link>
            </div>
            <div>
                <Link to="/about" className="nav-link link2">About</Link>
            </div>
            </div>
        </div>
    )
}
export default Navbar