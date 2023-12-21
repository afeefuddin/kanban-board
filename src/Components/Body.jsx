import React from 'react'
import Card from './Card'
function Body() {
  return (
    <div className='p-4'>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
        <div><Card /></div>
      </div>
    </div>
  )
}

export default Body