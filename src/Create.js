import  { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {

    const [title, setTtile] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = { title, body, author };
        
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },    
            body: JSON.stringify(blog)
        }).then( (res) => {
            if (!res.ok) {
                throw Error("Could not create new blog");
            }
            return res.json();
        })
        .then((data) => {
            console.log(data);
            history.push('/');
            setTtile('');
            setBody('');            
            setAuthor('');
        })


    }

    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form action="" onSubmit={handleSubmit}>
                <label >Blog Title</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTtile(e.target.value)} 
                 />
                <label >Blog Body</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)} 
                >

                </textarea>
                <label >Blog Author</label>
                <select 
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="1" >Mario</option>
                    <option value="2">Luigi</option>
                    <option value="3">Yoshi</option>
                    <option value="4">Peach</option>
                </select>
                <button>add blog</button>
            </form>
            
        </div>
    );
}
 
export default Create;