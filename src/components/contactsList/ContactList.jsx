import React from 'react'
import {useSelector} from 'react-redux'
import styles from "./contactList.module.css"
import { convoSelector } from '../../redux/reducer'
import CaontactCard from '../contactCard/ContactCard'

const ContactList = () => {

  // getting contacts state variable using useSelector from react-redux
  const {contacts} = useSelector(convoSelector);

  return (
    <div className={styles.container}>
        <h1>Contacts</h1>
        {
            contacts.map((contact, i)=>(
                <CaontactCard key={i} contact={contact} />
            ))
        }
    </div>
  )
}

export default ContactList