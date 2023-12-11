'use client'
import { ButtonProps } from '@/types'
import React from 'react'

const Button: React.FC<ButtonProps> = (props) => {
  const { text, className, onClick, type } = props
  return (
    <button
      onClick={() => onClick && onClick()}
      type={type}
      className={`p-3 px-4  rounded-md font-medium ${
        className ? className : 'bg-white text-primary'
      }`}
    >
      {text}
    </button>
  )
}

export default Button
