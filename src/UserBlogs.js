import  useFetch  from './useFetch';
import { useParams } from 'react-router-dom';
import List from './List';

const UserBlogs = () => {
 
    const { userId } = useParams();

    const {data, isPending, error} = useFetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

    return ( 
        <div className="user-blogs box-size">
            <List isPending={isPending} displayUser={false} list={data} title={`Blogs by user ${userId}`} />
        </div>
     );
}
 
export default UserBlogs;