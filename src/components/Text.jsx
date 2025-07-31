import React from 'react'

const Text = ({extraClass, title}) => {
  return (
    <p className={`text-[18px] font-normal text-[#1DA1F2] ${extraClass}`}>{title}</p>
  )
}

export default Text
