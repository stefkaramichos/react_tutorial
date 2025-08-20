import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Search = () => {

    const [search, setSearch] = useState('');
    const [blogs, setBlogs] = useState([]);
    const [dataReady, setLoading] = useState(false);

    const searchData = (e) => {
        setSearch(e.target.value);
        e.preventDefault();
        setLoading(false);
        setTimeout(() => {
            fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${search}`, {
            method: 'GET',  
            headers: {
                'Content-Type': 'application/json'
            }
            })
            .then((res) => {
                if(!res.ok) {
                    throw Error("Could not fetch the data");
                }
                return res.json();
            })
            .then((data) => {
                setBlogs(data);
                setLoading(true);
            })
        }, 500); 
        
        
    }

    return ( 
        <div className="search">
            <h2>Search</h2>
            <p>Use the search bar to find specific blogs.</p>   
            <input type="text" value={ search } onChange={(e) => searchData(e)} placeholder="Search blogs..." />
            <div className="result-blogs ">
                {search.length > 0 ? dataReady ? blogs.length > 0 ? blogs.map((blog) => (
                    <div key={blog.id} className="blog blog-preview">
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{blog.title}</h2>
                        </Link>
                        <p>{blog.body}</p>
                        <p>Written by User {blog.userId}</p>
                    </div>
                )) : <div>no data found</div> : <div>Loading...</div> : <div>Search for blogs</div>
                } 
            </div>
        </div>
     );
}
 
export default Search;