import React, { useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../Config/FirebaseConfig";
const auth = getAuth(app);
export const AuthContext = createContext();
const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const AuthInfo = { user, createUser };
  return <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>;
};

export default UserContext;
