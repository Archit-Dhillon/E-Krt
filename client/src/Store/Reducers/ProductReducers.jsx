import {
  ADD_PRODUCT_RED,
  DELETE_PRODUCT_RED,
  GET_PRODUCT_RED,
  UPDATE_PRODUCT_RED,
} from "../Constants";

export default function ProductReducer(state = [], action) {
  let newState, index;
  switch (action.type) {
    case GET_PRODUCT_RED:
      return action.payload;
    case ADD_PRODUCT_RED:
      newState = state; //new state ka use is lya kya h kyo ke state empty ho ,islya state ko update karna ka lya newstate
      newState.push(action.payload); //ka use kya(react m state ko update nahi kya jata balki state ko new state ka sath replace kr dya jata h)
      return newState; //
    // case UPDATE_PRODUCT_RED:
    //   newState = state;
    //   index = state.findIndex((x) => x._id === action.payload._id); //update m state ka use kya gya h kyo ke humara pass phala sa he state h (new state ka use
    //   newState[index].name = action.payload.name;
    //   newState[index].maincategory = action.payload.maincategory; // iss lya nahi kyo ke hum na stste change nehi ke balki state ke value change ke h)
    //   newState[index].subcategory = action.payload.subcategory;
    //   newState[index].brand = action.payload.brand;
    //   newState[index].size = action.payload.size;
    //   newState[index].color = action.payload.color;

    //   newState[index].baseprice = action.payload.baseprice;
    //   newState[index].finalprice = action.payload.finalprice;
    //   newState[index].discount = action.payload.discount;
    //   newState[index].stock = action.payload.stock;
    //   newState[index].dsscription = action.payload.dsscription;
    //   newState[index].pic1 = action.payload.pic1;
    //   newState[index].pic2 = action.payload.pic2;
    //   newState[index].pic3 = action.payload.pic3;

    //   newState[index].pic4 = action.payload.pic4;

    //   return newState;
    case UPDATE_PRODUCT_RED:
      index = state.findIndex((x) => x._id === action.payload._id); //update m state ka use kya gya h kyo ke humara pass phala sa he state h (new state ka use
      state[index].name = action.payload.name;
      state[index].maincategory = action.payload.maincategory; // iss lya nahi kyo ke hum na stste change nehi ke balki state ke value change ke h)
      state[index].subcategory = action.payload.subcategory;
      state[index].brand = action.payload.brand;
      state[index].size = action.payload.size;
      state[index].color = action.payload.color;
      state[index].baseprice = action.payload.baseprice;
      state[index].finalprice = action.payload.finalprice;
      state[index].discount = action.payload.discount;
      state[index].stock = action.payload.stock;
      state[index].dsscription = action.payload.dsscription;
      state[index].pic1 = action.payload.pic1;
      state[index].pic2 = action.payload.pic2;
      state[index].pic3 = action.payload.pic3;

      state[index].pic4 = action.payload.pic4;

      return state;
    case DELETE_PRODUCT_RED:
      newState = state.filter((x) => x._id !== action.payload._id); // delete m hum  na new state bna le os purani state ko replace kr dya or given id ka alawa uss
      return newState; // new state m waki sara element dal dya to uss karan sa  vo element delete ho gya
    //EXAMPLE:  ya kuch uss traha h ke bus m 1-10 tak sawari bath the huma 4,5 nahi la jana h to hum
    // sab ko bus sa utar dya or phir 4,5 ka bina sab ko batha lya to aab bus ma sirf
    //1,2,3,6,7,8,9,10 ra gya

    default:
      return state;
  }
}
