import React, { useEffect, useRef } from 'react'
import styles from "./convoView.module.css"
import ChatCard from '../chatCard/ChatCard';
import {useSelector} from "react-redux";
import { convoSelector } from '../../redux/reducer';
import ChatInput from '../chatInput/ChatInput';

const ConversationView = () => {

  // getting state variables using useSelector from react-redux
  const {activeContact, conversations} = useSelector(convoSelector)

  const messagesEndRef = useRef(null); // using useRef to scroll the chat to the bottom

  // scrolling the chat to the bottom when the conversations changes
  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  },[conversations, activeContact]);

  // filtering the activeChat from conversations via id
  const activeChat = conversations.filter(convo=> convo.id === activeContact)[0];

  // getting the activeChat's chatHistory & setting it to empry array if no conversation available
  const chats = activeChat.chatHistory? activeChat.chatHistory:[]

  return (
    <>
      <div className={styles.container}>
        <div className={styles.receiver}>
          <div className={styles.image}>
            <img src={activeChat.image} alt='profile'/>
          </div>
          <h1>{activeChat.name}</h1>
        </div>
        <div className={styles.chatContainer}>
          {chats.map((chat, i)=>(
              <ChatCard key={i} chat={chat}/>
            ))}
          <div ref={messagesEndRef} />
        </div>
        <div className={styles.messageInput}>
          <ChatInput />
        </div>
      </div>
    </>
  )
}

export default ConversationView