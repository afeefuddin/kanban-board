import React from 'react'

function UserIcon({user}) {
  const firstname = user?.name?.split(" ")[0]
  const lastname = user?.name?.split(" ")[1]
  const watermark = firstname.charAt(0) + lastname?.charAt(0)
  const colors = ["#900C3F","#C70039","#F1C40F","#C70039"]
  const randomColor = colors[Math.floor(Math.random()*colors.length)]
  return (
    <div>
      <div className='text-light-secondary' style={{background:randomColor}}>
        {watermark}
      </div>
    </div>
  )
}

export default UserIcon