import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Github() {
    const {userId} = useParams()
    const [data ,setData ] = useState([])
    useEffect(()=>{
        fetch(`https://api.github.com/users/${userId}`)
        .then(response => response.json())
        .then((res) =>{
            console.log(res);
            setData(res)
        } )
    }
    ,[])
  return (
    <div className='text-center text-xl m-4 bg-gray-600 p-4 '>Github Followers : {data.followers} 
    <img className="flex justify-center items-center" width={150} src={data.avatar_url} />
    </div>

  )
}

export default Github