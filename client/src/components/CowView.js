import React from 'react';

const CowView = ({ cows, currCowId }) => {

  const currCow = cows.filter(cow => cow._id === currCowId)

  return (
    <div>
      {currCowId.length !== 0 ? (
        <div>
        <h2>
          Name: {currCow[0].name}
        </h2>
        <h2>
          Description: {currCow[0].description}
        </h2>
      </div>
      ): (<></>)}
    </div>
  )
}

export default CowView;