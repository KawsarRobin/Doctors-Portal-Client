import {
  createUserWithEmailAndPassword,
  getAuth,
  getIdToken,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeFirebase from '../Pages/Home/Login/Firebase/Firebase.init';

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');
  const [admin, setAdmin] = useState('');
  const [token, setToken] = useState('');

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  //Create new user
  const registerUser = (email, password, name, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setAuthError('');
        const newUser = { email, displayName: name };
        //set initial user
        setUser(newUser);
        //set user to database
        saveUser(email, name, 'POST');
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        navigate('/');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //Log in with email
  const logInWithEmail = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        const destination = location?.state?.from || '/';
        navigate(destination);
        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //Sign in with google
  const logInWithGoogle = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, 'PUT');
        const destination = location?.state?.from || '/';
        navigate(destination);
        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //Observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => {
          setToken(idToken);
        });
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unSubscribe;
  }, [auth]);

  //Logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // Save user to database
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };

    fetch('https://intense-cove-70929.herokuapp.com/users', {
      method: method,
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    });
  };

  //Admin check
  useEffect(() => {
    fetch(`https://intense-cove-70929.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  return {
    user,
    registerUser,
    logOut,
    logInWithEmail,
    isLoading,
    authError,
    admin,
    logInWithGoogle,
    token,
  };
};

export default useFirebase;
