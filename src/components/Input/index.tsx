import React from 'react'
type InputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string,
  prefix?: string,
  size?: 'small' | 'medium' | 'large',
  name?:string
}
const Input = ({ onChange, size, placeholder, prefix,name }: InputProps) => {
  return (
    <div className='flex items-center space-x-2 border border-blue-500 mr-2 px-2'>
      {prefix && prefix}
      <input
        onChange={onChange}
        className={`outline-none py-2 w-full ${size==="small"&& "text-sm"}`}
        name= {name}
        placeholder={placeholder} />  
    </div>
  )
}

export default Input