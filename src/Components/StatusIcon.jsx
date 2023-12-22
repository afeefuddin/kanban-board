import React from 'react'
import backlog from '../assets/backlog.svg'
import cancelled from '../assets/cancelled.svg'
import completed from '../assets/completed.svg'
import inprogress from '../assets/inprogress.svg'
import todo from '../assets/todo.svg'


function StatusIcon({status}) {
  switch (Number(status)) {
    case 0:
      return <div className='flex items-center justify-center w-5'><img className='w-5' src={backlog} alt="" /></div>
      break;
    case 1: 
    return <div className='flex items-center justify-center w-5'><img className='w-5' src={todo} alt="" /></div>
    case 2: 
    return <div className='flex items-center justify-center w-5'><img className='w-5' src={inprogress} alt="" /></div>
    case 3:
      return <div className='flex items-center justify-center w-5'><img className='w-5' src={completed} alt="" /></div>
    case 4:
      return <div className='flex items-center justify-center w-5'><img className='w-5' src={cancelled} alt="" /></div>
    default:
      return <div></div>
      break;
  }
}

export default StatusIcon