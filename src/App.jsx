import './App.css';
import EventPlanner from '../src/pages/eventplanner';
import LoginPage from './components/login';
import {useState} from "react"

function App({handleLogin}) {
  //you dont want a user to be logged in upon loading page
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  //when the user clicks button to login setIsLoggedIn will be true
  function handleLogin(){
        console.log("hello from log in");
        setIsLoggedIn(true);
    }
  return (
    <>
        {!isLoggedIn ? (
          // show login page if not logged in
        <LoginPage handleLogin ={handleLogin} />
        ) : (
          // show event planner if logged in
        <EventPlanner />
        )}
    </>
  )
}

export default App
