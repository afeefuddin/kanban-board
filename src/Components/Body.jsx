import React, { useContext, useEffect, useState } from 'react'
import UseAPI from '../Hooks/UseAPI'
import DisplayContext from '../Context/DisplayContext'
import Group from './Group'

function Body() {
  const [data,setData] = useState()
  const {grouping,ordering} = useContext(DisplayContext)
  const fetchData = async()=>{
    const res = await UseAPI()
    setData(res)
  }
  useEffect(()=>{
    fetchData();
  },[])
  useEffect(()=>{

  },[data])
  useEffect(() => {
    // Check if data and data.tickets are defined and data.tickets is an array
    if (data?.tickets && Array.isArray(data.tickets)) {
      const sortedTickets = [...data.tickets].sort((a, b) => {
        if (ordering === 'title') {
          return a.title.localeCompare(b.title);
        } else {
          return a.priority - b.priority;
        }
      });
  
      // Update the state with the sorted array
      setData((prevData) => ({
        ...prevData,
        tickets: sortedTickets,
      }));
    }
  
    console.log(ordering);
    console.log(data);
  }, [ordering]); 
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