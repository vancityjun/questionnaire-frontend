import React from 'react'

interface InputFieldProps {
  title: string
  name: string
  type?: string
  required?: boolean
  onChange: (value: string) => void
}

function InputField({
  title,
  name,
  onChange,
  type = 'text',
  required = false,
}: InputFieldProps) {
  return (
    <div>
      <label id={name}>
        {required && <span>*</span>}
        {title}
      </label>
      <input
        type={type}
        name={name}
        aria-label={name}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

export default InputField
