import React from 'react'
import styles from "./convoCard.module.css"
import {useSelector, useDispatch} from "react-redux";
import { convoSelector, setActiveContact } from '../../redux/reducer';

const ConvoCard = ({convo}) => {

    // getting activeContact state variable using useSelector from react-redux
    const {activeContact} = useSelector(convoSelector);
    const dispatch = useDispatch();  // useDispatch from react-redux used to dispatch actions

    // activeChat function used to dispatch setActiveContact action to show the selected contact conversation
    const activeChat = async()=>{
        dispatch(setActiveContact(convo.id))
    }
    
    // checking if the current contact is activeContact then setting the style of the active convoCard accordingly
    let active = activeContact === convo.id

    return (
        <>  
            <div className={`${styles.container} ${active? styles.active:""}`} onClick={activeChat}>
                <div className={styles.innerContainer}>
                    <div className={styles.image}>
                        <img src={convo.image} alt='profile'/>
                    </div>
                    <div className={styles.middleText}>
                        <h1>{convo.name}</h1>
                        <p>{convo.lastMsg}</p>
                    </div>
                </div>
                <div className={styles.time}>
                    <p>{convo.time}</p>
                </div>
            </div>
        </>
  )
}

export default ConvoCard