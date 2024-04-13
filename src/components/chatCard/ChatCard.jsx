import React from 'react'
import styles from "./chatCard.module.css"

const ChatCard = ({chat}) => {

  // myMessage used to check if it's the sender's message that's me & will use it to set style accordingly
  const myMessage = chat.sender === "John Doe";

  return (
    <>  
      <div className={`${styles.container} ${myMessage?styles.right:styles.left}`}>
        <div className={styles.msgContainer}>
          <p className={styles.msg}>{chat.message}</p>
          <div className={styles.timeContainer}>
            <p className={styles.time}>{chat.time}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatCard