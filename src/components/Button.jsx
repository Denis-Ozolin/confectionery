import React from 'react'

function Button({type, text}) {
  return (
    <button type={type} className='button'>{text}</button>
  )
}

export default Button