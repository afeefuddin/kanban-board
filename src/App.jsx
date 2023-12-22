import { useContext, useEffect } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Context from './Context/ThemeContext'
import Body from './Components/Body'

function App() {

  const {theme,setTheme} = useContext(Context)
  useEffect(()=>{
    if(!localStorage.getItem('theme')){
      if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        setTheme('dark')
      }
      else{
        setTheme('light')
      }
    }
    else{
      setTheme(localStorage.getItem('theme'))
    }
   
  },[])
  useEffect(()=>{
    if(theme==='dark'){
      document.documentElement.classList.add('dark')
    }
    else{
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme',theme)
  },[theme])
  return (
    <div className='bg-light-primary dark:bg-dark-primary min-h-screen dark:text-dark-text'>      
      <Navbar />
      <Body />
    </div>
  )
}

export default App
