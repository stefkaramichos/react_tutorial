import Button from "./Button";
import { Link } from 'react-router-dom';

const List = ( { list, title, clicked, changeClikedValue } ) => {
   
    return (
        <div className="blogs">
            {list.map((item, index) => (
                <div className="blog-preview" key={item.id}>
                    <Link to={`/blogs/${item.id}`}>
                    <h2 className={ clicked === index ? 'active' : ''} onClick={ () => changeClikedValue(index) }>{item.title}</h2> 
                    </Link>
                    {/* <button onClick={() => { deleteBlog(item.id) }}>Delete blog</button> */}
                    <Button textButton={item.title} />
                </div>
            ))}
            <p>{title}</p>
        </div>
    );
}
 
export default List;