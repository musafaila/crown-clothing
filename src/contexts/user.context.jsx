import { createContext, useState, useEffect } from "react";

import { AuthStateListener } from "../utils/firebase/firebase.utils";

// USER CONTEXT
export const userContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

// USER CONTEXT PROVIDER
export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  // console.log(currentUser);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = AuthStateListener((user) => {
      console.log(user);
      setCurrentUser(user);
    })
    return unsubscribe;
  }, []);

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};