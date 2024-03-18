import PropTypes from 'prop-types'
import Count from '../Count/Count';

const Counts = ({counts,handlePreparing}) => {
    return (
       <div>
         <div className="">
            <h1 className="text-2xl font-semibold text-black text-center mb-3">Want to cook:{counts.length}</h1>
            <hr />
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
            {
                counts.map((count,indx)=><Count indx={indx+1} key={indx} handlePreparing={handlePreparing} count={count}></Count> )
            }
            </table>
        </div>
        <div>
        {/* <h1 className="text-2xl font-semibold text-black text-center mb-3">Currently cooking:{}
        </h1> */}
        </div>
       </div>

    );
};
Counts.propTypes ={
    counts:PropTypes.array,
    handlePreparing:PropTypes.object.func
}


export default Counts;