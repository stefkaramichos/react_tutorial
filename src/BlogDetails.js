import useFetch from './useFetch';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { data, isPending, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  return (
    <div className="blog-details blog-page box-size">
      {error && <div>{error}</div>}
      {isPending && <div><img width="80" src="/Loading_icon.gif"/></div>}
      {data && (
        <div className="blog">
          <h2>{data.title}</h2>
          <p>{data.body}</p>
          <Link to={`/blogs/user/${data.userId}`}>
          <p>Written by User {data.userId}</p>
          </Link>
          <button type="button" onClick={() => history.goBack()}>
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
