import React from 'react'
import Card from './Card'

const statusMap = {
    0 : 'Backlog',
    1 : 'Todo',
    2 : 'In progress',
    3 : 'Done',
    4 : 'Cancelled'
}
function Group({data,userDetails,type,val}) {
  return (
    <div> 
        <div>
            {/* <GroupHeading type={type} userDetails={userDetails} /> */}
            {userDetails?.name}
            {type==='status' && statusMap[val]}
        </div>
        <div className='flex flex-col gap-2'>
            {
                type==='user' && data.tickets && data.tickets.map((item)=>{
                    if(item.userId===userDetails.id){
                        return <Card ticket={item} type={type} />
                    }
                })
            }
            {
                type==='priority' && data?.tickets && data?.tickets?.map((item)=>{
                    if(item.priority===val){
                        return <Card ticket={item} type={type} users={data?.users}/>
                    }
                })
            }
            {
                type==='status' && data?.tickets && data.tickets.map((item)=>{
                    if(item.status===statusMap[val]){
                        return <Card ticket={item} type={type} />
                    }
                })
            }
        </div>  
    </div>
  )
}

export default Group