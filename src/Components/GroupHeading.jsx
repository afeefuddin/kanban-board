import React from 'react'
import UserIcon from './UserIcon'
import { statusMap,priorityMap } from '../utils/general'
import PriorityIcon from './PriorityIcon'
import StatusIcon from './StatusIcon'
import options from '../assets/options.svg'

function GroupHeading({type,userDetails,count,val}) {

  return (
    <div className='mt-2 mb-2 flex flex-row justify-between'>
        <div>
            {type==='user' && 
            <div className='flex flex-row gap-2'>
                <UserIcon username={userDetails} />
                <div>{userDetails.name}</div>
                <div>{count}</div>
            </div>
            }
            {
              type==='status' &&
              <div className='flex flex-row gap-2'>
                <StatusIcon status={val}/>
                <div>{statusMap[val]}</div>
                <div>{count}</div>
              </div>
            }
            {
              type==='priority' &&
              <div className='flex flex-row gap-2'>
                <PriorityIcon priority={val} />
                <div>{priorityMap[val]}</div>
                <div>{count}</div>
              </div>
            }
        </div>
        <div className='flex flex-row gap-1'>
            <div className='text-text-2 text-lg mb-auto'><div>+</div></div>
          <div className='mt-auto mb-auto'><img src={options} alt="" /></div>
        </div>
    </div>
  )
}

export default GroupHeading