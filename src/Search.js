import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from './useFetch';
import { useEffect } from 'react';

const Search = () => {

    const [search, setSearch] = useState('');
    const [searchBy, setSearchBy] = useState('');
    const [activeBackground, setActiveBackground] = useState(false);
    const [dataReady, setLoading] = useState(false);
    const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/posts');
  

    
    const filterByAttr = (attr) => {
        setSearchBy(attr);
        setUrl('https://jsonplaceholder.typicode.com/posts?' + `${attr}_like=${search}`);
        setActiveBackground(!activeBackground); 
    }
 

    const searchData = (e,attr) => {
        setSearch(e.target.value);
        setSearchBy(attr);
        setUrl('https://jsonplaceholder.typicode.com/posts?' + `${attr}_like=${e.target.value}`);
    }

    const { data: blogs, isPending, error } = useFetch(
        url
    );


    return ( 
        <div className="search box-size">
            {searchBy ? (
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '20px'}}>
                    <h2>Searching by: {searchBy}</h2> - 
                    <span>{ search }</span>
                </div>
            ) : <h2>Search</h2>}
             
            <input type="text" value={ search } onChange={(e) => searchData(e,searchBy)} placeholder="Search blogs..." />
            <div className="search-by">
                <span onClick={() => filterByAttr('title')} style={searchBy == 'title' ? {backgroundColor: '#f1356d', color: 'white'} : {}} >
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
                {searchBy ? !isPending ? blogs.length > 0 ? blogs.map((blog) => (
                    <div key={blog.id} className="blog blog-preview">
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{blog.title}</h2>
                        </Link>
                        <p>{blog.body}</p>
                        <p>Written by User {blog.userId}</p>
                    </div>
                )) : <div>no data found</div> : <div><img width="80" src="/Loading_icon.gif"/></div>  : <div>Search by title, body or userId</div>
                } 
            </div>
        </div>
     );
}
 
export default Search;