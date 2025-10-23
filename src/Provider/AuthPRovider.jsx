import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import { createContext, useState, useEffect } from "react";
import { auth } from "../Firebase/firebase.config";
import Lottie from "lottie-react";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthLoading = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/loading.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation:", err));
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-64 h-64">
        {animationData && <Lottie animationData={animationData} loop={true} />}
        <p className="text-center text-gray-600 mt-4 text-lg">
          Initializing...
        </p>
      </div>
    </div>
  );
};
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(user);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authData = {
    user,
    setUser,
    loading,
    createUser,
    signInWithGoogle,
    loginUser,
    logoutUser,
    resetPassword,
  };

  if (loading) {
    return <AuthLoading />;
  }

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
