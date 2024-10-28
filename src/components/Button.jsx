const Button = ({children, className}) => {
  return (
    <button className={`flex items-center justify-center ${className || ''}`}>
      {children}
    </button>
  )
}

export default Button