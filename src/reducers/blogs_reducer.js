import { FETCH_BLOGS } from "../actions";

export default function(state = {}, action) {
  console.log('inside of blog reducer');
  switch(action.type) {
    case FETCH_BLOGS:
      console.log('inside switch case');
    default:
    return state;  
  }
}