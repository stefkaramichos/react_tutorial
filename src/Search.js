import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from './useFetch';

const Search = () => {

    const [search, setSearch] = useState('');
    const [searchBy, setSearchBy] = useState([]);
    const [activeBackground, setActiveBackground] = useState(false);
    const [dataReady, setLoading] = useState(false);
    const { data: blogs, isPending, error } = useFetch(
        'https://jsonplaceholder.typicode.com/posts?' + (searchBy.length > 0 ? searchBy.map(attr => `${attr}_like=${search}`).join('&') : `title_like=${search}&body_like=${search}&userId_like=${search}`)
    );


    const searchData = (e) => {
        setSearch(e.target.value);
    }

    const filterByAttr = (attr) => {
        if (!searchBy.includes(attr)){
            setSearchBy([attr]);
        }
        else {
            const newSearchBy = searchBy.filter(item => item !== attr);
            setSearchBy(newSearchBy);
        }
        setActiveBackground(!activeBackground); 
    }

    return ( 
        <div className="search box-size">
            <h2>Search</h2>
             
            <input type="text" value={ search } onChange={(e) => searchData(e)} placeholder="Search blogs..." />
            <div className="search-by">
                <span onClick={() => filterByAttr('title')} style={searchBy.includes('title') ? {backgroundColor: '#f1356d', color: 'white'} : {}} >
                    Search by title
                </span>
                <span  onClick={() => filterByAttr('body')} style={searchBy.includes('body') ? {backgroundColor: '#f1356d', color: 'white'} : {}} >
                    Search by body
                </span>
                <span  onClick={() => filterByAttr('userId')} style={searchBy.includes('userId') ? {backgroundColor: '#f1356d', color: 'white'} : {}}>
                    Search by userId
                </span>
            </div>
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