import React, { useReducer } from "react";
import Context from "./store";

import counterReducer, { counterStore } from "./counter";
import userReducer, { userStore } from "./user";

const Store = props => {

  const [counterState, counterDispatch] = useReducer( counterReducer, counterStore );
  const [userState, userDispatch] = useReducer( userReducer, userStore );

  const triggerDispatchs = action => {
    const dispatchs = [
      counterDispatch, 
      userDispatch
    ]; 
    for (let i = 0; i < dispatchs.length; i++) {
      dispatchs[i](action);
    }
  };

  const combinedReducers = {
    store: {
      ...counterState,
      ...userState
    },
    dispatch: action => triggerDispatchs(action)
  };

  return (
    <Context.Provider value={combinedReducers}>
      {props.children}
    </Context.Provider>
  );
};

export default Store;