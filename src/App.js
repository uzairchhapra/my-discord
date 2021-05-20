import React, { useEffect } from 'react';
import './App.css';
import Chat from './Chat';
import { login, logout, selectUser } from './features/userSlice';
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux'
import Login from './Login';
import { auth } from './firebase';

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser)
      if (authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }))
      }
      else {
        dispatch(logout())
      }
    })
  }, [dispatch])
  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) :
        <Login />
      }
    </div>
  );
}

export default App;
