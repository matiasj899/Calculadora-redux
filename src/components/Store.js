import { createStore } from "redux";
const initialState = {
  count:""
};

function total(state = initialState, action) {
  switch (action.type) {
    case "NUMBER":
      return {
        ...state,
        count: state.count + action.payload
      };
    case "CLEAR":
      return {
        ...state,
        count: "",
      };
    case "EQUAL":
      return{
        ...state,
        count:eval(state.count)
      }
    default:
      return state;
  }
}
let store = createStore(total);
store.subscribe(() => {
  console.log(store.getState());
});


export default store