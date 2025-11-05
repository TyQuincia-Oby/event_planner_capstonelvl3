//access the report and form pages (and log in if implemented)
import {useState} from "react";
import Airports from '../components/airports';
import Guests from '../components/guests';
import Venues from '../components/venues';
import Desktop from "../pages/desktop";
import GuestForm from "../pages/guestform";


export default function Navbar(){
 console.log("Hello from Navbar")

 const [selectedContent, setSelectedContent] = useState('desktop')

    function goToVenues(){
        console.log ("Going to Venues")
        setSelectedContent('venues')
       
    }
    function goToAirports(){
        console.log ("Going to Airports")
        setSelectedContent('airports')
    }
    function goToDesktop(){
        console.log ("Going to Desktop")
        setSelectedContent('desktop')
    }
    // function goToHome(){
    //     console.log ("Going to Home Page")
    //     //setSelectedContent('')
    // }
    function goToAddGuest(){
        console.log ("Going to Add Guest")
        setSelectedContent('addGuest')
    }
    function showGuests(){
        console.log ("Showing Guest List")
        setSelectedContent('guestList')
    }
    let pageContent = <Guests />;

    if (selectedContent === 'guestList'){
        pageContent = <Guests />;
    } else if (selectedContent === 'desktop'){
        pageContent = <Desktop />
    } else if (selectedContent === 'airports'){
        pageContent = <Airports />
    } else if (selectedContent === 'venues'){
        pageContent = <Venues />
    } 


    return(
        <div>
            <nav>
                <button onClick={goToVenues}>Venues</button>
                <button onClick={goToAirports}>Airports</button>
                <button onClick={goToDesktop}>Desktop</button>
                {/* <button onClick={goToHome}>Home</button> */}
                {/* <button onClick={goToAddGuest}>Add Guest</button> */}
                <button onClick={showGuests}>Get Guest List</button>
            </nav>
            {pageContent}
        </div>

    );
}