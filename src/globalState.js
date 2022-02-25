import { createContext, useState } from "react";

import axios from "axios";

const initialState1 = {
  isAuthenticated: false,
  loading: true,
  error: { statusCode: "", message: "" },
  token: localStorage.getItem("token"),
};

export const authContext = createContext();
const AppContext = ({ children }) => {
  const [initialState, setInitialState] = useState(initialState1);
  const login = async (formData) => {};

  return (
    <authContext.Provider value={{ initialState1: initialState1, login }}>
      {children}
    </authContext.Provider>
  );
};

export default AppContext;
