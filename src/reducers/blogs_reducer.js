import { FETCH_BLOGS } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
  case FETCH_BLOGS:
  default:
    return state;
  }
}
