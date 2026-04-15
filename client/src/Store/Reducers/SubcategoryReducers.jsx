import {
  ADD_SUBCATEGORY_RED,
  DELETE_SUBCATEGORY_RED,
  GET_SUBCATEGORY_RED,
  UPDATE_SUBCATEGORY_RED,
} from "../Constants";

export default function SubcategoryReducer(state = [], action) {
  let newState, index;
  switch (action.type) {
    case GET_SUBCATEGORY_RED:
      return action.payload;
    case ADD_SUBCATEGORY_RED:
      newState = state; //new state ka use is lya kya h kyo ke state empty ho ,islya state ko update karna ka lya newstate
      newState.push(action.payload); //ka use kya(react m state ko update nahi kya jata balki state ko new state ka sath replace kr dya jata h)
      return newState; //
    case UPDATE_SUBCATEGORY_RED:
      newState = state;
      index = state.findIndex((x) => x._id === action.payload._id); //update m state ka use kya gya h kyo ke humara pass phala sa he state h (new state ka use
      newState[index].name = action.payload.name; // iss lya nahi kyo ke hum na stste change nehi ke balki state ke value change ke h)
      return newState;
    case DELETE_SUBCATEGORY_RED:
      newState = state.filter((x) => x._id !== action.payload._id); // delete m hum  na new state bna le os purani state ko replace kr dya or given id ka alawa uss
      return newState; // new state m waki sara element dal dya to uss karan sa  vo element delete ho gya
    //EXAMPLE:  ya kuch uss traha h ke bus m 1-10 tak sawari bath the huma 4,5 nahi la jana h to hum
    // sab ko bus sa utar dya or phir 4,5 ka bina sab ko batha lya to aab bus ma sirf
    //1,2,3,6,7,8,9,10 ra gya

    default:
      return state;
  }
}
