import { useEffect, useState } from "react";
import initFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword,updateProfile, getIdToken } from "firebase/auth";

initFirebase()
const useFirebase = () =>{
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState('');
  
  const auth = getAuth();

    const userRegister = (email, password, name, histroy) => {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
      
      .then((userCredential) => {
          sessionStorage.setItem("email", userCredential.user.email);
          setError('');
          // const newUser = {email, displayName: name};
          // setUser(newUser)
          // save user to the database
          saveUser(email, name, 'POST')
          // send name to firebase after creation
  
          updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            
          }).catch((error) => {
            
          });
          histroy.replace('/')
          
        })
        .catch((error) => {
          
          setError(error.message);
          console.log(error);
          
        })
        .finally(()=> setIsLoading(false));
  }

    const userLogin = (email, password, location, history) => {
      setIsLoading(true);
      
      signInWithEmailAndPassword(auth, email, password)
      
      .then((userCredential) => {
        sessionStorage.setItem("email", userCredential.user.email);
        const destination = location?.state?.from || '/'
        history.replace(destination);
        setError('');
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(()=> setIsLoading(false));
  }

// Observer User State
useEffect(() =>{
  const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        getIdToken(user)
        .then(idToken => {
          setToken(idToken);
        })
      } else {
        setUser({})
      }
      setIsLoading(false)
    });
    return () => unsubscribe;
},[auth])

useEffect(() => {
fetch(`https://secret-tundra-51737.herokuapp.com/users/${user.email}`)
    .then(res => res.json())
    .then(data => setAdmin(data.admin))
}, [user.email])


const logout = () =>{
setIsLoading(true)
  signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    })
    .finally(()=> setIsLoading(false));
}

const saveUser = (email, displayName, method) => {
const user = { email, displayName };
fetch('https://secret-tundra-51737.herokuapp.com/users', {
    method: method,
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(user)
})
    .then()
}

    return{
    user,
    userRegister,
    logout,
    userLogin,
    admin,
    token,
    isLoading,
    error,

    }

}

export default useFirebase;