import {configureStore} from "@reduxjs/toolkit";
import { convoReducer } from "./redux/reducer";
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";

// Config for persist data
const persistConfig = {
    key: 'root',
    storage,
};

// Persist Reducer from redux-persist
const persistedReducer = persistReducer(persistConfig, convoReducer);


// Creating store using persisted Reducer to persist the data
const store = configureStore({
    reducer: persistedReducer,
    middleware:getDefaultMiddleware =>
    getDefaultMiddleware({
        serializableCheck:false,
    }),
});

// exporting persistor to provide acces to persisted data to all components
export const persistor = persistStore(store);

// exporting store to provide data to all the components
export default store;