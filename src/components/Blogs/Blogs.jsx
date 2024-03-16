import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleAddToCount}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('fakes.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="w-2/3 grid grid-cols-2 p-4 gap-4">
            {
                blogs.map(blog =>
                    <Blog
                        key={blog.id}
                        blog={blog}
                        handleAddToCount={handleAddToCount}
                    ></Blog>)
            }

        </div>
    );
};

Blogs.propTypes = {
    handleAddToCount:PropTypes.func
}

export default Blogs;