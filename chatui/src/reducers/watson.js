// Import types
import {
  INPUT_SUCCESS,
  INPUT_FAIL,
  SESSION_SUCCESS,
  SESSION_FAIL,
  MESSAGE_SUCCESS,
  MESSAGE_FAIL,
} from "../actions/types";

// Initial state
const initialState = {
  messages: [],
};

// Switch statement - update state
const updateState = (state = initialState, action) => {
  const { type, payload } = action;
  let { messages } = state;

  switch (type) {
    case INPUT_SUCCESS:
      messages = [...messages, { message: payload, type: "message user" }];
      return {
        ...state,
        messages,
      };
    case INPUT_FAIL:
      return {
        ...state,
        messages,
      };
    case SESSION_SUCCESS:
      localStorage.setItem("session", payload["session_id"]);
      return {
        ...state,
      };
    case SESSION_FAIL:
      return {
        ...state,
      };
    case MESSAGE_SUCCESS:
      messages = [...messages, { message: payload, type: "message bot" }];
      return {
        ...state,
        messages,
      };
    case MESSAGE_FAIL:
      return {
        ...state,
        messages,
      };
    default:
      return {
        ...state,
      };
  }
};

export default updateState;