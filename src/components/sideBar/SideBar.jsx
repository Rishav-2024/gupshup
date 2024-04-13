import React, { useEffect } from 'react'
import Search from '../search/Search'
import {useSelector, useDispatch} from "react-redux"
import ConvoCard from '../convoCard/ConvoCard'
import { convoSelector, setSearchedConvo } from '../../redux/reducer'
import ContactList from '../contactsList/ContactList'
import styles from "./sideBar.module.css"

const SideBar = () => {

  // getting state variables using useSelector from react-redux
  const {searchedConvo, showContacts, conversations } = useSelector(convoSelector);

  // useDispatch from react-redux used to dispatch actions
  const dispatch = useDispatch()

  // useEffect used to dispatch setSearchedConvo action to set it when the conversations changes
  useEffect(()=>{
    dispatch(setSearchedConvo(conversations))
  },[conversations, dispatch])
  
  
  return (
    <>
      <Search/>
      <div className={styles.contacts}>
        {
          showContacts?<ContactList/>
          :(
          <div>
            {
              searchedConvo.map((convo, i)=>(
                <ConvoCard key={i} convo={convo}/>
              ))
            }
          </div>
          )
        }
      </div>
    
    </>
  )
}

export default SideBar