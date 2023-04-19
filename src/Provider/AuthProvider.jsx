import { createContext } from "react";
import app from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);
const Auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(Auth, email, password);
    };

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(Auth, email, password);
    }

    const AuthInfo = {
      createUser,
      loginUser,
    };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
