import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styles from "./nav.module.css"
import { convoSelector, toggleShowContacts } from '../../redux/reducer';

const Nav = () => {

    // getting showContacts state variable using useSelector from react-redux
    const {showContacts} = useSelector(convoSelector);
    const dispatch = useDispatch();  // useDispatch from react-redux used to dispatch actions

    return (    
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <img src="https://media.licdn.com/dms/image/D4D03AQHXfuUbmhX9YA/profile-displayphoto-shrink_200_200/0/1708926095035?e=1718236800&v=beta&t=Q3iUYrvbHxlp1-UvDd3Dv30pAVny1sLeOupy-EV5Pb4" alt='profile'/>
                </div>
                <div className={styles.icon}>
                    <i className={`fa-solid fa-circle-plus ${showContacts?styles.close:""}`} onClick={()=>dispatch(toggleShowContacts())}></i>
                </div>
            </div>
            <div className={styles.right}>
                <i className="fa-brands fa-rocketchat"></i>
                <h1>Gupshup</h1>
                <i className="fa-brands fa-rocketchat"></i>
            </div>
        </div>
    )
}

export default Nav