import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './styles/Blogs.css'

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('/api/blogs')
            .then(response => {
                setBlogs(response.data);
                console.log(blogs);
            })
            .catch(error => {
                console.error('Error fetching blogs: ', error);
            })
    }, [blogs])

    return <div className='blogs'>
        <h1 className='blogs-heading'>Blogs</h1>
        <div className='blogs-container'>
            {blogs.map(blog => (
                <div className='blog'>
                    <h2 className='blog-title'>{blog.title}</h2>
                    <p className='blog-description'>{blog.description}</p>
                </div>
            ))}
        </div>
    </div>
}

export default Blogs;