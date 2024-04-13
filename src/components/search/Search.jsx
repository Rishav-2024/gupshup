import React, { useRef } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import styles from "./search.module.css"
import { convoSelector, setSearchedConvo } from '../../redux/reducer';

const Search = () => {

  const searchRef = useRef(); // useRef used to get input value

  // getting conversations state variable using useSelector from react-redux
  const {conversations} = useSelector(convoSelector);
  const dispatch = useDispatch()  // useDispatch from react-redux used to dispatch actions

  // handleSearch function used to dispatch setSearchedConvo action on entering the search terms
  const handleSearch = ()=>{
    const seachedName = (searchRef.current.value).toLowerCase();
    const searchedConvos = conversations.filter(convo => convo.name.toLowerCase().includes(seachedName))
    dispatch(setSearchedConvo(searchedConvos))
  }

  return (
    <>
        <div className={styles.container}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type='text' name='search'  placeholder='Search' ref={searchRef} onChange={handleSearch}/>
        </div>
    </>
  )
}

export default Search