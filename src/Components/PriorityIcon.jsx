import React from 'react'
import nopriority from '../assets/nopriority.svg'
import lowpriority from '../assets/lowpriority.svg'
import mediumpriority from '../assets/mediumpriority.svg'
import highpriority from '../assets/highpriority.svg'
import urgentpriority from '../assets/urgentpriority.svg'

function PriorityIcon({priority}) {
  switch (Number(priority)) {
    case 0:
      return <div className='flex items-center justify-center'><img src={nopriority} alt="" /></div>
      break;
    case 1: 
    return <div className='flex items-center justify-center'><img src={lowpriority} alt="" /></div>
    case 2: 
    return <div className='flex items-center justify-center'><img src={mediumpriority} alt="" /></div>
    case 3:
      return <div className='flex items-center justify-center'><img src={highpriority} alt="" /></div>
    case 4:
      return <div className='flex items-center justify-center'><img src={urgentpriority} alt="" /></div>
    default:
      return <div></div>
      break;
  }
}

export default PriorityIcon