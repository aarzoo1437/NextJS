import { useRouter } from 'next/router'
import React from 'react'

const data = () => {
    const router = useRouter()
    const TypedData = router.query.data;
  return (
  
    <div>{TypedData}</div>
  )
}

export default data


// dynamic routing 
// useRouter
// creating navbar