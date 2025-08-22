import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";


const Navbar = () => {
   
    const location = useLocation();
    const history = useHistory();
    const checkHistory = () => {
        if (history.length > 2) {   
            return true;
        } else{
            return false;
        }
    }
    

    return ( 
        <nav className="navbar">
            {checkHistory() && <span onClick={() => { history.go(-1) }} style={{cursor: 'pointer'}} className="back-btn">
                  ⬅
            </span> }
            <h1>Stef Karamichos</h1> 
            <div className="links">
                <Link to="/"   className= {location.pathname == '/' ? 'active-link-menu' : ''} >Home</Link>
                <Link to="/create"  className= {location.pathname == '/create' ? 'active-link-menu' : ''}>New Blog</Link> 
                <Link to="/colorpicker"  className= {location.pathname == '/colorpicker' ? 'active-link-menu' : ''}>Color Picker</Link> 
                <Link to="/search"   className= {location.pathname == '/search' ? 'active-link-menu' : ''}>Live Search</Link> 
                <Link to="/handle"   className= {location.pathname == '/handle' ? 'active-link-menu' : ''}>Handle Elements</Link> 
            </div>
        </nav>
     );
}
 
export default Navbar;