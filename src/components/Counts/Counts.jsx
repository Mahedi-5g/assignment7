import PropTypes from 'prop-types'
import Count from '../Count/Count';

const Counts = ({counts}) => {
    return (
        <div className="">
            <h1 className="text-2xl font-semibold text-black text-center mb-3">Want to cook:{counts.length}</h1>
            <hr />
            {
                counts.map(count =><Count key={count.id} count={count}></Count> )
            }
        </div>
    );
};
Counts.propTypes ={
    counts:PropTypes.array
}

export default Counts;