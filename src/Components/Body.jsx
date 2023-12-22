import React, { useContext, useEffect, useState } from 'react'
import UseAPI from '../Hooks/UseAPI'
import DisplayContext from '../Context/DisplayContext'
import Group from './Group'
import Loading from './loading'

function Body() {
  const [data,setData] = useState()
  const [loading,setLoading] = useState(true)
  const {grouping,ordering} = useContext(DisplayContext)
  const fetchData = async()=>{
    const res = await UseAPI()
    setData(res)
    setLoading(false)
  }
  useEffect(()=>{
    fetchData();
  },[])
  if(loading){
    return <div className='h-full'><Loading /></div>
  }
  return (
    <div className='p-4'>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
        {
          grouping==='user' && data?.users && data.users.map((item) => (
            <Group type='user' userDetails={item} data={data} key={item.id}/>
            ))
        }
        {
          grouping==='priority' && Array.from({length:5},(_,index)=>(
            <Group type='priority' data={data} key={index} val={index} />
          ))
        }
        {
          grouping==='status' && Array.from({length:5},(_,index)=>(
            <Group type='status' data={data} key={index} val={index} />
          ))
        }
      </div>
    </div>
  )
}

export default Body