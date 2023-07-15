import React from 'react'

type ButtonProps = {
    type?: "primary" | "danger";
    shape?: "round" | "circle" |"default";
    icon?: React.ReactNode;
    loading?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
}

const Button = ({loading, children,type,shape, icon, onClick}:ButtonProps) => {
  return (
    <div>{loading? "Loading...":""}
    <button
      className={`border border-gray-500 py-2 px-3
      ${type ==='primary' && 'text-white bg-blue-500'}
      ${type ==='danger' && 'text-white bg-red-500'}
      ${shape ==='round' && 'rounded-full'}
      ${shape ==='circle' && 'rounded-full w-10 h-10 text-center'}
      ${shape ==='default' && 'rounded-md'}

    
    `}
    onClick={onClick}>
      {icon&&icon}
      {children}
      </button>
    </div>
  )
}

export default Button