export const COUNTER_INC = "COUNTER_INC";
export const COUNTER_DEC = "COUNTER_DEC";

export const counterStore = {
    counter: 0
};
  
export const counterReducer = (state = counterStore, action) => {
    switch (action.type) {
      case COUNTER_INC:
        return {
          ...state,
          counter: state.counter + 1
        };
      case COUNTER_DEC:
        return {
          ...state,
          counter: state.counter - 1
        };
      default:
        return state;
    }
};
  
export const IncrementCounter = () => {
    return {
      type: COUNTER_INC
    };
};
  
export const DecrementCounter = () => {
    return {
      type: COUNTER_DEC
    };
};
  
export default counterReducer;