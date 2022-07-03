import React from 'react';
import CowListEntry from './CowListEntry';

const CowList = ({cows}) => {
  console.log(cows)
  return (
    <div>
      <h2>Cow List:</h2>
      <ul>
      {cows.map((cow) =>
      <CowListEntry
        key={cow._id}
        cow={cow}
      />
      )}
      </ul>
    </div>
  )
}

export default CowList;