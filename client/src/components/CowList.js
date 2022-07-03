import React from 'react';
import CowListEntry from './CowListEntry';

const CowList = ({ cows, deleteOne, editOne }) => {
  return (
    <div>
      <h2>Cow List</h2>
      {cows.map((cow) =>
      <CowListEntry
        key={cow._id}
        cow={cow}
        deleteOne={deleteOne}
        editOne={editOne}
      />
      )}
    </div>
  )

}

export default CowList;