import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';

const SuccessForm = ({setSuccess}) => {
  return (
    <div onClick={() => setSuccess(false)} className="font-regular cursor-pointer relative mb-4  rounded-lg bg-green-500 p-4 text-base leading-5 text-white opacity-100 w-[100%] h-[50px] flex items-center justify-between">
        Message delivered successfully <span><FontAwesomeIcon icon={faRotateRight} /></span>
      </div>
  )
}

export default SuccessForm