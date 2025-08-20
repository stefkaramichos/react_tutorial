import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from './useFetch';

const Search = () => {

    const [search, setSearch] = useState('');
   
    const [dataReady, setLoading] = useState(false);
    const { data: blogs, isPending, error } = useFetch(
        `https://jsonplaceholder.typicode.com/posts?title_like=${search}`
    );


    const searchData = (e) => {
        setSearch(e.target.value);
    }

    return ( 
        <div className="search">
            <h2>Search</h2>
             
            <input type="text" value={ search } onChange={(e) => searchData(e)} placeholder="Search blogs..." />
            <div className="result-blogs ">
                {search.length > 0 ? !isPending ? blogs.length > 0 ? blogs.map((blog) => (
                    <div key={blog.id} className="blog blog-preview">
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{blog.title}</h2>
                        </Link>
                        <p>{blog.body}</p>
                        <p>Written by User {blog.userId}</p>
                    </div>
                )) : <div>no data found</div> : <div><img width="80" src="/Loading_icon.gif"/></div> : <div>Search for blogs</div>
                } 
            </div>
        </div>
     );
}
 
export default Search;