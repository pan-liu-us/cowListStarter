import React from 'react';

const CowListEntry = ({cow}) => {

  return (
    <div>
      <li>{cow.name}</li>
    </div>
  )

}

export default CowListEntry;