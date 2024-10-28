import React from 'react'

const Button = ({children, className}) => {
  return (
    <button className={`bg-kesari-400 py-[6px] px-3 rounded-md text-white flex items-center text-sm font-medium ${className || ''}`}>
      {children}
    </button>
  )
}

export default Button