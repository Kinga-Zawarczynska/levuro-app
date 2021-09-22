const initialState = {isLoggedIn: false, token: null}

export const userReducer = function (state = initialState, action) {
    switch (action.type) {
        case "LOG_IN":
          return {
            isLoggedIn: true,
            token: action.payload
          }
        case "LOG_OUT":
          return {
            isLoggedIn: false,
            token: null
          }
        default:
          return state;
      }
};