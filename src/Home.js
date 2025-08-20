import { useState } from 'react';
import { useEffect } from 'react';
import List from './List';
import useFetch from './useFetch';

const Home = () => {

    // let name = 'mario';
    const [age, setAge] = useState(20);
    const [name, setName] = useState('mario');
    const [clicked, setClicked] = useState(0);

  

    // const [blogs, setBlogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },    
    //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    // ]);

    const {data, isPending, error} = useFetch('https://jsonplaceholder.typicode.com/posts');

    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/")
        .then((res) => {
            if (!res.ok) {
                throw Error("Could not fetch todos");
            }
            return res.json();
        })
        .then((data) => {
            setTodos(data);  // directly store the API response
            setLoading(false);
        })
        .catch((err) => {
            console.error(err.message);
            setLoading(false);
        });
    }, []);


    

    const [list, setList] = useState([
        { name: 'mario', age: 20, id: 1 },
        { name: 'luigi', age: 25, id: 2 },
        { name: 'yoshi', age: 30, id: 3 }   
    ])

    const handleAge = () => {
        setAge(age + 1);
    }

    const handleClick = (e) => {
        if (name === 'mario') {
            setName('luigi');
        } else {
            setName('mario');
        }
        
        console.log('Button clicked! ' + name, e.target);
    };  

    const handelClickAgain = (name, e) => {
        console.log('Button clicked again! ' + name, e.target);
    }

    // const deleteBlog = (id) => {
    //     const newBlogs = data.filter(blog => blog.id !== id);
    //     setData(newBlogs);
    // }

    const handleFormSubmit = (e) => {
        e.preventDefault(); 

        const formData = new FormData(e.target);
        const newBlo = {
            title: formData.get("title"),
            body: formData.get("body"),
            userId: formData.get("userId"),
        };

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(newBlo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }
    

    const changeClikedValue = (index) => {
        setClicked(index);
        console.log('Clicked index: ', index);
    }

    return (  
        <div className="home">
            <h2>Home Page</h2>
            <p>{ name }</p>
            <p> { age } </p>
            <button className="btn" onClick={handleClick}>change name</button> 
            <button className="btn" onClick={(e) => handelClickAgain('stef', e) }>Click Me Again</button> 
            <button className="btn" onClick={handleAge}>Increase Age</button>
  
            { error && <div>{ error }</div> }
            { isPending &&  <div>Loading...</div> }
            { data && <List list={data} title = "test title" changeClikedValue={changeClikedValue} clicked={clicked}   />}
            
            <div className="todos">
                {todos.filter( (item) => item.id == 1 || item.id == 2 ).map((todo) => (
                    <div key={todo.id}>
                        <h2>{todo.title}</h2>
                        <p>Completed: {todo.completed ? "yes" : "no"}</p>
                    </div>
                ))}
            </div>
            {/* <List list={blogs.filter( (blog) => blog.author == 'mario' )} title = "steef's blogs" /> */}

            {/* <form  onSubmit={(e) => {handleFormSubmit(e)}}>
                <input type="text" placeholder="title" name="title" />
                <input type="text" placeholder="body" name="body" />
                <input type="number" placeholder="user id" name="body" />
                <input type="submit" value="Add Blog" />
            </form> */}
        </div>
     );
}
 
export default Home;