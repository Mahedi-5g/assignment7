import PropTypes from 'prop-types'

const Count = ({ count, handlePreparing, indx }) => {
    const { recipe_name, preparing_time, calories
    } = count || {}
    return (
        <tbody className='w-20'>
            <tr className="bg-base-200 text-sm">
                <th>{indx}</th>

                <td>{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
                <button onClick={()=>handlePreparing(count)} className='btn btn-success mt-2 mr-2 text-white'>Preparing</button>
            </tr>
        </tbody>
    );
};

Count.propTypes = {
    count: PropTypes.object,
    indx: PropTypes.number,
    handlePreparing: PropTypes.func
}

export default Count;
