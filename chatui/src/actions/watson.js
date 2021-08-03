// Import types
import {
    INPUT_SUCCESS,
     INPUT_FAIL,
     SESSION_SUCCESS,
     SESSION_FAIL,
     MESSAGE_SUCCESS,
     MESSAGE_FAIL
} from "./types";

//Import Axios 
import axios from "axios";

// functions handleing user messages
export const userMessage = (message) => async (dispatch) =>{
    try{
        dispatch({type:INPUT_SUCCESS, payload:message});
    }catch(err){
        dispatch({type:INPUT_FAIL});
    }
}

//Create a session - API Call
export const createSession = () => async (dispatch) => {
    try {
        const res = await axios.post("http://localhost:9000/init");
        dispatch({type:SESSION_SUCCESS, payload:res.data});
    } catch (err) {
        dispatch({type:SESSION_FAIL})
    }
}


//Send message to the bot - API Call
export const sendMessage = (message, sessionid) => async (dispatch) => {
    try {
        const headers = {
            'session_id': sessionid,
          }
        const body = {input:message}
        const res = await axios.post("http://localhost:9000/ask", body, {headers: headers});
        console.log(res.data);
        dispatch({type:MESSAGE_SUCCESS, payload: res.data});
    } catch (err) {
        dispatch({type:MESSAGE_FAIL});
    }
}