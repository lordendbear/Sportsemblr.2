import * as types from '../actions/actionTypes';

const handleLoadMessagesSuccess = (state, action) => {
  return {
    ...state,
    messages: action.messages
  };
};

export default function messageReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_MESSAGES_SUCCESS:
      return handleLoadMessagesSuccess(state, action);

    default:
      return state;
  }
}