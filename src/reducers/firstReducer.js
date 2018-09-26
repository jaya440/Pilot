// @flow
import {
  GET_DATA
} from '../constants/ActionTypes';



const initialState = {}

export default function firstReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      return [
        ...state,
        {
          text: action.text
        }
      ]

    default:
      return state
  }
};
