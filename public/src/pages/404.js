import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="flex justify-center">
      <div className="text-center flex flex-col items-center mt-[20%] gap-12">
        <p className="text-3xl text-teal-500 font-semibold">
          Oops! We couldn't find what you were looking for!
        </p>
        <p
          className="text-2xl font-bold hover:underline hover:underline-offset-2 hover:cursor-pointer"
          onClick={() => navigate(-1)}
        >
          Let's go back
        </p>
      </div>
    </div>
  )
}

export default NotFound
