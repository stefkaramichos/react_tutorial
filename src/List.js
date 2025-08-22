import Button from "./Button";
import { Link } from 'react-router-dom';


const List = ( { list, title, clicked, displayUser, isPending } ) => {
 
    return (
        <div className="blogs">
            <h2>{title}</h2>
            {console.log(isPending)}
            {isPending &&  <div><img width="80" src="/Loading_icon.gif"/></div> }
            {list && list.map((item, index) => (
                <div className="blog-preview" key={item.id}>
                    <Link to={`/blogs/${item.id}`}>
                        <h2 className={ clicked === index ? 'active' : ''} >{item.title}</h2> 
                    </Link>
                    { displayUser && (
                    <Link to={`/blogs/user/${item.userId}`}>
                        <p>By user: { item.userId } </p>
                    </Link>
                    )}
                    
                    {/* <button onClick={() => { deleteBlog(item.id) }}>Delete blog</button> */}
                    {/* <Button textButton={item.title} /> */}
                </div>
            ))}
        </div>
    );
}
 
export default List;