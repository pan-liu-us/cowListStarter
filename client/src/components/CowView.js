import React from 'react';

const CowView = ({ cows, currCowId }) => {

  const currCow = cows.filter(cow => cow._id === currCowId)

  return (
    <div>
      {currCowId.length !== 0 ? (
      <div>
        <h3>
          Name: {currCow[0].name}
        </h3>
        <h3>
          Description: {currCow[0].description}
        </h3>
      </div>
      ) : (<></>)}
    </div>
  )
}

export default CowView;