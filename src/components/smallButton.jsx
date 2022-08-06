import React from 'react'

function SmallButton({children, onClick}) {
  return (
    <button onClick={onClick} className='smallButton' type='button'>
      {children}
    </button>
  )
}

export default SmallButton