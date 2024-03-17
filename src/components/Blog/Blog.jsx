import PropTypes from 'prop-types';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blog = ({ blog, handleAddToCount }) => {
    const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = blog;
    const [selected, setSelected] =useState(false);

    const handleClick = () => {
        if (!selected) {
            handleAddToCount(blog);
            setSelected(true);
            toast('item add in cook list'); // Mark the recipe as selected
        } else {
            alert("You have already selected this recipe.");
        }
    };
    return (
        <div className='border-2 p-5 rounded-xl'>
            <div className=' '><img className='w-full h-48 rounded-xl mb-4' src={recipe_image} alt={`${recipe_name}`} /></div>
            <h2 className="text-xl font-semibold mb-3">{recipe_name}</h2>
            <p className='text-lg font-normal text-slate-600 mb-3'>{short_description}</p>
            <hr />
            <p className='text-lg font-medium mt-3'>Ingredients: 6</p>

            <p className='text-base font-normal text-slate-800 mb-3'>
                {
                    <ul>
                        {ingredients.map((ingred, idx) => (
                            <li key={idx}><a href="">{ingred}</a></li>
                        ))}
                    </ul>
                }
            </p>

            <div className='flex justify-between'>
                <div className='flex '>
                    <p><img src="src/assets/Frame.jpg" alt="" /></p>
                    <p className='text-black'>{preparing_time}</p>
                </div>
                <div className='flex'>
                    <p> <img src="src/assets/Frame (1).jpg" alt="" /></p>
                    <p className='text-slate-950'>{calories}</p>
                </div>
            </div>
            <button  onClick={handleClick} className="btn btn-success mt-4 text-white">Want to Cook</button>
            <ToastContainer />
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToCount: PropTypes.func.isRequired
}

export default Blog;