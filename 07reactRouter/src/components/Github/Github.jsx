import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'


const hiteeshGitUrl = 'https://api.github.com/users/hiteshchoudhary'
// const rajGitUrl = 'https://api.github.com/users/rraj0811'
const pabbojiGitUrl = 'https://api.github.com/users/pabbojivamshi'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])

    // useEffect(()=>{
    //     fetch(hiteeshGitUrl)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // })
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
   const response = await fetch(hiteeshGitUrl)
   return response.json()
    
}