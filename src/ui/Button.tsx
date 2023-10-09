import React from 'react'

interface ButtonCnt {
  className?: string,
  btnContent: string,
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonCnt> = (props) => {
  return (
    <button onClick={props.onClick} className={props.className}>{props.btnContent}</button>
  )
}

export default Button