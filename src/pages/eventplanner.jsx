import { useState } from 'react'
import Airports from '../components/airports';
//import '/App.css'
import Navbar from '../components/Navbar';
import Guests from '../components/guests';
import Venues from '../components/venues';
import Desktop from '../pages/desktop';
import GuestForm from './guestform';

export default function EventPlanner() {
  

  return (
    <>
      <div className="card">
        <h1>Event Planning SideKick</h1>
        <p>Begin your planning adventure...</p>
        <Navbar />
        <Guests />
        <Airports />
        <Venues />
        <Desktop />
        <GuestForm />
       </div>
    </>
  );
}
