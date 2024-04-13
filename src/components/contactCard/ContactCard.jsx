import React from 'react'
import styles from "./contactCard.module.css"
import {useDispatch, useSelector} from "react-redux";
import { addNewConvo, convoSelector, setActiveContact, toggleShowContacts } from '../../redux/reducer';
import { toast } from 'react-toastify';
// import { convoSelector, setActiveContact } from '../../redux/reducer';

const CaontactCard = ({contact}) => {

    // getting state variables using useSelector from react-redux
    const {conversations} = useSelector(convoSelector)
    const dispatch = useDispatch();  // useDispatch from react-redux used to dispatch actions

    // Toastify used for notifications
    const notify = (msg, type) => toast[type](msg,{autoClose: 3000,});
    
    // addConvo function used to added new conversation by calling actions using dispatch
    const addConvo = ()=>{
        const contatcExist = conversations.filter(convo => convo.id === contact.id)
        if(contatcExist.length < 1){
            dispatch(addNewConvo(contact))
            notify(`${contact.name} has been added!`, "success")
        }else{
            dispatch(setActiveContact(contact.id))
            dispatch(toggleShowContacts())
            notify(`${contact.name} already added!`, "info")
        }
    }

    return (
        <>  
            <div className={styles.container} onClick={addConvo}>
                <div className={styles.innerContainer}>
                    <div className={styles.image}>
                        <img src={contact.image} alt='profile'/>
                    </div>
                    <div className={styles.contactName}>
                        <h1>{contact.name}</h1>
                    </div>
                </div>
            </div>
        </>
  )
}

export default CaontactCard