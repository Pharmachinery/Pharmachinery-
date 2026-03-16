import React from 'react'

const ErrorForm = ({message}) => {
  return (
    <div className="font-regular relative mb-4  rounded-lg bg-red-500 p-4 text-base leading-5 text-white opacity-100 w-[100%] h-[50px] flex items-center justify-between">
        {message} 
      </div>
  )
}

export default ErrorForm