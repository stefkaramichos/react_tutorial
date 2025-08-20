import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
   
    const [activeLink, setActiveLink] = useState('Home');

    const handleLinkClass = (e) => {
        setActiveLink(e.target.textContent);
    }

    return ( 
        <nav className="navbar">
            <h1>Stef Karamichos</h1> 
            <div className="links">
                <Link to="/" onClick={ (e) => handleLinkClass(e) }  className= {activeLink == 'Home' && 'active-link-menu'} >Home</Link>
                <Link to="/create" onClick={ (e) => handleLinkClass(e) }  className= {activeLink == 'New Blog' && 'active-link-menu'}>New Blog</Link> 
                <Link to="/colorpicker" onClick={ (e) => handleLinkClass(e) }  className= {activeLink == 'Color Picker' && 'active-link-menu'}>Color Picker</Link> 
                <Link to="/search" onClick={ (e) => handleLinkClass(e) }  className= {activeLink == 'Live Search' && 'active-link-menu'}>Live Search</Link> 
            </div>
        </nav>
     );
}
 
export default Navbar;