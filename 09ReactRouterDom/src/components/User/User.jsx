import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userId} = useParams()
  return (
    <div className='flex justify-center items-center text-2xl bg-gray-800 text-white p-4 '>User :{userId}</div>
  )
}

export default User