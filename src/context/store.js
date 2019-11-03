import React from "react";

import { counterStore } from "./counter";
import { userStore } from "./user";

export const initialState = {
  store: {
      ...counterStore,
      ...userStore
  },
  dispatch: () => {}
};

const Context = React.createContext(initialState);

export default Context;