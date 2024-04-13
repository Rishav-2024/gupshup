import './App.css';
import { ToastContainer} from 'react-toastify'; 
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import {Provider} from "react-redux";
import store, { persistor } from './store';
import PageNotFound from './pages/404/PageNotFound';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<PageNotFound/>}/>
          </Routes>
        </PersistGate>
      </Provider>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
