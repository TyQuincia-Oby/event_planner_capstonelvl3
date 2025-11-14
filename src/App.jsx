import './App.css';
import EventPlanner from '../src/pages/eventplanner';
import LoginPage from './components/login';
import supabase from './utils/supabase';
import { useState, useEffect } from 'react';

function App() {
  // user is null when not logged in
  const [user, setUser] = useState(null);

  useEffect(() => {
  const savedUser = localStorage.getItem("user");
  if (savedUser) {
    setUser(JSON.parse(savedUser));
  }
}, []);


  // called when user successfully logs in
  function loginComplete(userData) {
    console.log("User logged in:", userData);
    setUser(userData);

     // save session so user stays logged in
    localStorage.setItem("user", JSON.stringify(userData));

    
  }



  return (
    <>
      {user ? (
        // show event planner when logged in
        <EventPlanner user={user}  />
      ) : (
        // show login page when not logged in
        <LoginPage loginComplete={loginComplete} />
      )}
    </>
  );
}

export default App;
