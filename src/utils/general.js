function getUsername(ticket,users){
    const id = ticket.userId
    const res = users?.find(item=>item.id===id)
    if(res){
        return res.name
    }
    else{
        return ''
    }
    
}

export {getUsername}