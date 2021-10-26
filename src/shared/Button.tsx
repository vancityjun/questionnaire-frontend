import React from 'react'

interface ButtonProps {
  title: String
  name: string
  onClick: () => void
}
function Button({ title, name, onClick }: ButtonProps) {
  return (
    <>
      <button onClick={() => onClick()} name={name}>
        {title}
      </button>
    </>
  )
}

export default Button
