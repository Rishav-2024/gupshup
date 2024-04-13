import React, { useRef } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "./chatInput.module.css"
import { addNewChat, convoSelector } from '../../redux/reducer'

const ChatInput = () => {

  const messageRef = useRef() // useRef used to get input value
  // getting state variables using useSelector from react-redux
  const {activeContact, conversations} = useSelector(convoSelector)
  const dispatch = useDispatch()  // useDispatch from react-redux used to dispatch actions

  // Toastify used for notifications
  const notify = (msg, type) => toast[type](msg,{autoClose: 3000,});

  // handleMessage function used to added new message by calling actions using dispatch
  const handleMessage = (e)=>{
    e.preventDefault()
    if(messageRef.current.value === ""){
      notify("Enter your message", "warn")
      return
    }
    const messageObj = {
      sender:"John Doe",
      message:messageRef.current.value,
      time:new Date().toLocaleTimeString('en-US', {hour:'numeric', minute:'2-digit'})
    };
    const index = conversations.findIndex(convo => convo.id === activeContact);
    dispatch(addNewChat({index, messageObj}))
    messageRef.current.value=""
    notify("Message sent!", "success")
  }
  
  // handleIcon function used to dispatch action to set icon as a message 
  const handleIcon = (icon)=>{
    const messageObj = {
      sender:"John Doe",
      message:icon,
      time:new Date().toLocaleTimeString('en-US', {hour:'numeric', minute:'2-digit'})
    };
    const index = conversations.findIndex(convo => convo.id === activeContact);
    dispatch(addNewChat({index, messageObj}))
    notify("Message sent!", "success")
  }


  return (
    <form onSubmit={handleMessage} className={styles.container}>
      <input name='message' type='text' ref={messageRef} placeholder='Type your message here'/>
      <span className={styles.thumbsUp}>
          <i className="fa-solid fa-thumbs-up" onClick={()=>handleIcon("👍")}></i>
      </span>
      <span className={styles.heart}>
          <i className="fa-solid fa-heart" onClick={()=>handleIcon("❤️")}></i>
      </span>
      <button className={styles.btn} type='submit'>Send</button>
    </form>
  )
}

export default ChatInput