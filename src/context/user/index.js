export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_LOGGED = "UPDATE_LOGGED";

export const userStore = {
    user:{},
    logged:false
};
  
export const userReducer = (state = userStore, action) => {
    switch (action.type) {
      case UPDATE_USER:
        return {
          ...state,
          user: action.value
        };
      case UPDATE_LOGGED:
        return {
          ...state,
          logged: action.value
        };
      default:
        return state;
    }
};
  
export const UpdateUser = value => {
    return {
      type: UPDATE_USER,
      value
    };
};
  
export const UpdateLogged = value => {
    return {
      type: UPDATE_LOGGED,
      value
    };
};
  
export default userReducer;