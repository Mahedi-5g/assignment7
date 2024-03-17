import PropTypes, { array } from 'prop-types'

const Count = ({ count }) => {
    const { recipe_name, preparing_time, calories, recipe_id } = count || {}
    return (
        <div className=''>

            <div className="">
                <table className="table">
                    <thead className='justify-around '>
                        <tr >
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody className='w-20'>
                        <tr className="bg-base-200 ">
                            <th>{array.length}</th>

                            <td>{recipe_name}</td>
                            <td>{preparing_time}</td>
                            <td>{calories}</td>
                            <button>Preparing</button>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Count.propTypes = {
    count: PropTypes.object
}

export default Count;