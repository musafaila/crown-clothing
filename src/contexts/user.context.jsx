import { createContext, useState } from "react";

export const userContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  // console.log(currentUser);
  const value = { currentUser, setCurrentUser };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};