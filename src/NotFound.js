import { Link } from 'react-router-dom';

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>  
            <p>That page cannot be found</p>
            <p>Go back to the <Link to="/">Home</Link> page</p>
        </div>
     );
}
 
export default NotFound;