import NavBar from '../NavBar/Nav-Bar';
import Header from '../Header/Header';
import "./Blog.css";
import BlogApp from './BlogApp'

const Blog = () => {
    return (
        <body>
            <Header></Header>
            <NavBar></NavBar>
            <BlogApp></BlogApp>
        </body>
    );
}

export default Blog