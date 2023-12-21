import React, { useContext } from 'react'
import DisplayContext from '../Context/DisplayContext'

function Card({ticket,user}) {
    const {grouping} = useContext(DisplayContext)
  return (
    <div className='w-full flex flex-col rounded pt-3 pb-3 pl-5 pr-5 bg-light-secondary dark:bg-dark-secondary border  border-dark-secondary dark:border-light-secondary'>
        <div className='flex flex-row justify-between text-text-2'>
            <div>Cam-1</div>
            <div>{grouping!=='user' && <div>Y </div>}</div>
        </div>
        <div className='flex flex-row gap-2'>
            {grouping!='status' && <div>0</div>}
            <div className='text-bold text-lg'>Optimise Database queries for performance</div>
        </div>
        <div className='flex flex-row gap-2'> 
        {grouping!='priority' && <div>0</div>}
            <div className='text-text-2 border border-text-2 rounded '>
                <div className='flex flex-row gap-1 pl-2 pr-2'>
                    <div>o</div>
                    <span>Feature Request</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card