import React, { useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../Config/FirebaseConfig";

const auth = getAuth(app);

export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const googleSignIn = () => {
   return signInWithPopup(auth, googleProvider)
  }
  const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  }
  const emailSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }
  const AuthInfo = { user, createUser, googleSignIn, githubSignIn, emailSignIn };

  return <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>;
};

export default UserContext;
