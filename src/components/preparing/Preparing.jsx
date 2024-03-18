const Preparing = ({prepareToCook}) => {
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
    <tbody className="bg-base-200">
        {
            prepareToCook.map((item,indx)=>(

                <tr key={indx}>
                <th>{indx+1}</th>
                <td>{item.recipe_name}</td>
                <td>{item.preparing_time}</td>
                <td>{item.calories}</td>
              </tr>
            ))
        }
    </tbody>
  </table>
</div>
        </div>
    );
};
Preparing.propTypes
export default Preparing;