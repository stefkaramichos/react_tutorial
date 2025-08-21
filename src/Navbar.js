import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from "react-router-dom";


const Navbar = () => {
   
    let location = useLocation();

    return ( 
        <nav className="navbar">
            <h1>Stef Karamichos</h1> 
            <div className="links">
                <Link to="/"   className= {location.pathname == '/' && 'active-link-menu'} >Home</Link>
                <Link to="/create"  className= {location.pathname == '/create' && 'active-link-menu'}>New Blog</Link> 
                <Link to="/colorpicker"  className= {location.pathname == '/colorpicker' && 'active-link-menu'}>Color Picker</Link> 
                <Link to="/search"   className= {location.pathname == '/search' && 'active-link-menu'}>Live Search</Link> 
                <Link to="/handle"   className= {location.pathname == '/handle' && 'active-link-menu'}>Handle Elements</Link> 
            </div>
        </nav>
     );
}
 
export default Navbar;