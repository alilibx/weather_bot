//Import Dependencies 
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import combineReducers  from "./reducers";

//Connect app to redux dev tools 
import { composeWithDevTools } from "redux-devtools-extension";

//Setup initial state 
const initialState = {};

//import middleware
const middleware = [thunk]

//Setup store 
const store = createStore(combineReducers, initialState, composeWithDevTools(applyMiddleware(...middleware)))

//Export to use it anywhere
export default store;