import * as types from '../actions/actionTypes';

const handleLoadMessagesSuccess = (state, action) => {
  return {
    ...state,
    messages: action.messages
  };
};

const handleDeleteMessageSuccess = (state, action) => {
  let messages = Object.assign([], state.messages);
  messages = messages
    .filter(m => m._id !== action.messageId);

  return {
    messages
  };
};


export default function messageReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_MESSAGES_SUCCESS:
      return handleLoadMessagesSuccess(state, action);

    case types.DELETE_MESSAGE_SUCCESS:
      return handleDeleteMessageSuccess(state, action);

    default:
      return state;
  }
}