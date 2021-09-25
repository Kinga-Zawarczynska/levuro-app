const initialState = {}

export const errorReducer = function (state = initialState, action) {
    switch (action.type) {
        case "THROW_ERROR":
          return {
            [action.payload.error]: action.payload.message
          }
        case "CLEAR_ERRORS":
          return initialState;
        case "SUCCESS":
          return {
            [action.payload.success]: action.payload.message
          }
        default:
          return state;
      }
};