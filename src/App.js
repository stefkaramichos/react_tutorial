import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import ColorPicker from './ColorPicker';
import Search from './Search';
import HandleElements from './HandleElements';
import UserBlogs from './UserBlogs';
import Footer from './Footer';

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const person = { name: 'mario', age: 20 };
  const link = "htttps://www.google.com";

  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />  
          </Route>  
          <Route exact path="/create" >
            <Create />  
          </Route> 
          <Route exact path="/blogs/:id">
            <BlogDetails />
          </Route>
          <Route exact path="/colorpicker">
            <ColorPicker />
          </Route>
          <Route exact path="/blogs/user/:userId">
            <UserBlogs />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/handle">
            <HandleElements />
          </Route>
          <Route path="*">
             <NotFound />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
