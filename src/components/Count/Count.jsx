import PropTypes from 'prop-types'

const Count = ({ count }) => {
    // const { recipe_name } = count;
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="bg-base-200">
                            <th>1</th>
                            <td>{`${recipe_name}`}</td>
                            <td>{`${preparing_time}`}</td>
                            <td>{`${calories}`}</td>
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