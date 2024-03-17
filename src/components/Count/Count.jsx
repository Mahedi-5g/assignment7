import PropTypes, { array } from 'prop-types'

const Count = ({ count,handlePreparing,indx}) => {
    const { recipe_name, preparing_time, calories
    } = count || {}
    return (

                
                    

                    <tbody className='w-20'>
                        <tr className="bg-base-200 text-sm">
                            <th>{indx}</th>

                            <td>{recipe_name}</td>
                            <td>{preparing_time}</td>
                            <td>{calories}</td>
                            <button onClick={handlePreparing} className='btn btn-success mt-4 text-white'>Preparing</button>
                        </tr>
                    </tbody>
               
 
    );
};

Count.propTypes = {
    count: PropTypes.object,
    handlePreparing:PropTypes.func
}

export default Count;

// import PropTypes from 'prop-types';

// const RecipeToCook = ({ recipe, handleAddToCook }) => {
//     const { recipe_name, preparing_time, calories } = recipe || {};

//     return (
//         <div className="">
//             <div className="">
//                 <table className="table">
//                     <thead className='justify-around '>
//                         <tr>
//                             <th></th>
//                             <th>Name</th>
//                             <th>Time</th>
//                             <th>Calories</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody className='w-20'>
//                         <tr className="bg-base-200 text-sm">
//                             {}
//                             <th>{}</th>
//                             <td>{recipe_name}</td>
//                             <td>{preparing_time}</td>
//                             <td>{calories}</td>
//                             <td>
//                                 <button onClick={() => handleAddToCook(recipe)} className='btn btn-success mt-4 text-white'>Preparing</button>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// RecipeToCook.propTypes = {
//     recipe: PropTypes.object.isRequired,
//     handleAddToCook: PropTypes.func.isRequired
// };

// export default RecipeToCook;
