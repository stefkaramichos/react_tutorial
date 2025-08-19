import useFetch from './useFetch';
import { useParams } from 'react-router-dom';


const BlogDetails = () => {

    const {id}= useParams();
    const { data, isPending, error } = useFetch("https://jsonplaceholder.typicode.com/posts/" + id);

    return ( 
        <div className="blog-details"> 
            { error && <div>{ error }</div> }
            { isPending &&  <div>Loading...</div> }
            {data && 
                <div className="blog" >
                    <h2>{data.title}</h2>
                    <p>{data.body}</p>
                    <p>Written by User {data.userId}</p>
                </div>
            }
        </div>
     );
}
 
export default BlogDetails;