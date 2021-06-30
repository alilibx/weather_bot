//Import dependencies 
import './App.css';
import {useEffect} from "react";

//Import redux component 
import { Provider } from 'react-redux';
import store from "./store";

//import chat component
import Chat from "./components/chat/chat";

//import action 
import { createSession } from './actions/watson';

//import axios 
import axios from 'axios';

if(localStorage.session){
  delete axios.defaults.headers.common["session_id"];
  axios.defaults.headers.common["session_id"] = localStorage.session;
}else{
  delete axios.defaults.headers.common["session_id"];
}

//connect app to redux

const App = () => {
  useEffect(()=>{
    //check if theres a session 
    if(!localStorage.session){ 
      // create a session 
      store.dispatch(createSession())
    }
  })
  return (
    <Provider store={store}>
    <div className="container">
      {/* Insert Chat component*/}
      <Chat />
    </div>
    </Provider>
  );
}

export default App;
