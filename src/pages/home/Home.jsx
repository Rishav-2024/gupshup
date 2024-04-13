import React from 'react'
import Nav from '../../components/navbar/Nav'
import SideBar from '../../components/sideBar/SideBar'
import ConversationView from '../../components/conversationView/ConversationView'
import styles from "./home.module.css"

const Home = () => {

  return (
    <>
      <div className={styles.container}>
        <Nav/>
        <div className={styles.innerContainer}>
          <div className={styles.left}>
            <SideBar/>
          </div>
          <div className={styles.right}>
            <ConversationView/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home