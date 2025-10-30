import { useState } from 'react'
import Airports from '../components/airports';
//import '/App.css'
import Navbar from '../components/Navbar';
import Guests from '../components/guests';
import Venues from '../components/venues';

export default function EventPlanner() {
  

  return (
    <>
      <div className="card">
        <h1>Event Planning SideKick</h1>
        <Navbar />
        <Guests />
        <Airports />
        <Venues />
       </div>
    </>
  );
}
