import React, { useContext } from 'react'
import Dropdown from './Dropdown'
import Context from '../Context/ThemeContext'
import lightModeIcon from '../assets/lightmode.svg'
import darkModeIcon from '../assets/darkmode.svg'

function Navbar() {
    const {theme,setTheme} = useContext(Context)
    const handleThemeChange = () =>{
        if(theme==='light'){
            setTheme('dark')
        }
        else{
            setTheme('light')
        }
    }
  return (
    <section className='bg-light-secondary dark:bg-dark-secondary dark:text-dark-text'>        
    <nav>
        <div className='ml-4 mr-4 p-4 flex flex-row justify-between'>
           <div><Dropdown /></div>
           <div onClick={handleThemeChange}>{theme==='light' ? <img src={darkModeIcon} /> : <img src={lightModeIcon} />}</div> 
        </div>
    </nav>
    </section>
  )
}

export default Navbar