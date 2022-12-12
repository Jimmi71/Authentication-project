import React from 'react'

const Overlay = (props) => {
  return (
    <div onClick={props.onCancel} className='absolute top-3 rounded-3xl bg-black/90 w-[97%] h-[99%] z-10'></div>
  )
}

export default Overlay