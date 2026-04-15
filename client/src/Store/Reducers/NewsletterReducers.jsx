import {
  ADD_NEWSLETTER_RED,
  DELETE_NEWSLETTER_RED,
  GET_NEWSLETTER_RED,
} from "../Constants";

export default function NewsletterReducer(state = [], action) {
  let newState;
  switch (action.type) {
    case GET_NEWSLETTER_RED:
      return action.payload;
    case ADD_NEWSLETTER_RED:
      newState = state; //new state ka use is lya kya h kyo ke state empty ho ,islya state ko update karna ka lya newstate
      newState.push(action.payload); //ka use kya(react m state ko update nahi kya jata balki state ko new state ka sath replace kr dya jata h)
      return newState; //

    case DELETE_NEWSLETTER_RED:
      newState = state.filter((x) => x._id !== action.payload._id);
    default:
      return state;
  }
}
