import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./pageNotFound.module.css"

const PageNotFound = () => {

  // useNavigate used to redirect to different pages 
  const navigate = useNavigate()

  // useEffect used to set timer that redirect to the home page after 2.5 sec using navigation
  useEffect(()=>{
    const timer = setTimeout(()=>{
      navigate("/")
    },2500)
    
    return ()=> clearTimeout(timer)
  },[navigate])

  return (
    <div className={styles.container}>
      <h1>OPPs! Page Not Found.</h1>
    </div>
  )
}

export default PageNotFound