import { useState, useEffect} from "react"
import BlogList from "./BlogList";

const Home = () => {
    const[blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'somi', id:1},
        { title: 'Welcome party', body: 'lorem ipsum...', author: 'rami', id:2},
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'somi', id:3}
    ]);

    const [name, setName] = useState('somi');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect ran');
        console.log(name)
    }, [name])
        

    return ( 
        <div className="home">
           <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
           {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'somi')} title="Somi's blogs"/> */}
           <button onClick={() => setName('rami')}>change name</button>
            <p>{ name }</p>
        </div>
     );
}
 
export default Home;