import { Link } from 'react-router-dom';

const Navbar = () => {
    const styles = {
        createLink: {
            color: 'white',
            backgroundColor: '#f1356d',
            borderRadius: '8px'
        }
    };

    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1> 
            <div        className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={styles.createLink}>New Blog</Link> 
            </div>
        </nav>
     );
}
 
export default Navbar;