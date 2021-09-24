import { MAIN } from '../../constants/flows'
const initialState = { path: MAIN}

export const flowReducer = function (state = initialState, action) {
    switch (action.type) {
        case "SET_STATE":
          return {
            path: action.payload
          }
        default:
          return state;
      }
};