import React from 'react'
import UserIcon from './UserIcon'
import { statusMap,priorityMap } from '../utils/general'

function GroupHeading({type,userDetails,count,val}) {

  return (
    <div className='mt-2 mb-2'>
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
                <div>{statusMap[val]}</div>
                <div>{count}</div>
              </div>
            }
            {
              type==='priority' &&
              <div className='flex flex-row gap-2'>
                <div>{priorityMap[val]}</div>
                <div>{count}</div>
              </div>
            }
        </div>
    </div>
  )
}

export default GroupHeading