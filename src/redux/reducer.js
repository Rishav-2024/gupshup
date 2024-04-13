import {createSlice} from "@reduxjs/toolkit";
import { createSelector } from 'reselect';
import conversations from "../data/conversations.json"
import contacts from "../data/contacts.json"

// Initial state for all the state variables
const initialState = {
    activeContact:1,
    conversations,
    contacts,
    searchedConvo:conversations,
    showContacts:false,
}

// createSlice used from redux toolkit to create reducer & actions
const conversationSlice = createSlice({
    name:"conversations",
    initialState:initialState,
    reducers:{
        setActiveContact:(state, {payload})=>{
            state.activeContact =  payload
        },
        setSearchedConvo:(state, {payload})=>{
            state.searchedConvo = [...payload]
        },
        toggleShowContacts:(state)=>{
            state.showContacts = !state.showContacts
        },
        addNewConvo:(state, {payload})=>{
            state.conversations = [...state.conversations, payload]
            state.showContacts = !state.showContacts
            state.activeContact =  payload.id
        },
        addNewChat:(state, {payload})=>{
            if(state.conversations[payload.index].chatHistory == null){
                state.conversations[payload.index].chatHistory = [payload.messageObj]
            }else{
                state.conversations[payload.index].chatHistory.push(payload.messageObj)
            }
            state.conversations[payload.index].time = payload.messageObj.time
            state.conversations[payload.index].lastMsg = payload.messageObj.message
        }
    }
})

// exporting reducer to import in the store
export const convoReducer = conversationSlice.reducer; 

// Reselect library used to memoize the selector
export const convoSelector = createSelector(
    (state) => state.activeContact,
    (state) => state.conversations,
    (state) => state.contacts,
    (state) => state.searchedConvo,
    (state) => state.showContacts,
    (activeContact, conversations, contacts, searchedConvo, showContacts) => ({
      activeContact,
      conversations,
      contacts,
      searchedConvo,
      showContacts,
    })
  );

// exporting all the actions to use inside components to trigger actions
export const {setActiveContact, setSearchedConvo, toggleShowContacts, addNewConvo, addNewChat} = conversationSlice.actions;