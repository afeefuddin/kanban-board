import React, { useEffect, useState } from "react";
import DisplayContext from "./DisplayContext";

const DisplayContextProvider = ({children}) =>{
    const [grouping,setGrouping] = useState('status')
    const [ordering,setOrdering] = useState('priority')
    useEffect(()=>{
        if(localStorage.getItem('displayState')){
            const parsedState = JSON.parse(localStorage.getItem('displayState'));
            setGrouping(parsedState.grouping);
            setOrdering(parsedState.ordering);
        }
        else{
            const state = {
                grouping : 'status',
                ordering : 'priority'
            }
            localStorage.setItem('displayState',JSON.stringify(state))
        }

    },[])
    function setOrderingInLocal(value){
        const curstate = JSON.parse(localStorage.getItem('displayState'));
        const newState = {
            grouping : curstate.grouping,
            ordering : value
        }
        localStorage.setItem('displayState',JSON.stringify(newState))
        setOrdering(value)
    }
    function setGroupingInLocal(value){
        const curstate = JSON.parse(localStorage.getItem('displayState'));
        const newState = {
            grouping : value,
            ordering : curstate.ordering
        }
        localStorage.setItem('displayState',JSON.stringify(newState))
        setGrouping(value)
    }
    return (
        <DisplayContext.Provider value={{grouping,setGroupingInLocal,ordering,setOrderingInLocal}}>
            {children}
        </DisplayContext.Provider>
    )
}

export default DisplayContextProvider