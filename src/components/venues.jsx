import {useState} from "react";
import "../App.css"
import supabase from "../utils/supabase";
import VenueCard from "./venuecard";

export default function Venues(){
    const [venues, setVenues] = useState([]);

    //retrieve venue list
    async function handleVenues(){
        console.log("Venue button clicked")
        //storing result of fetch from supabase into a variable
        const {data, error } = await supabase.from("venues").select().order("rating", {ascending: false});//higheset rating first
        if (error){
            console.error("Error fetching venues:", error);
            return;
        }
        setVenues(data);
    }


//     //empty list for venues
//     const venueList = [];

//    //put venue list into a list item table with attributes attached
//     for(let i = 0; i < venues.length ; i++){
//         venueList.push(
//             <li key={venues[i].id}>
//                 <img src={venues[i].thumbnail} alt={venues[i].title} /> {venues[i].title} {venues[i].address} {venues[i].rating} {venues[i].website}
//             </li>
//         )
//     }



    return(
        <div className="venues-page">
            <h1>🕊️Explore Our Venue Library!</h1>
            <p>Discover spaces that inspire connection, celebration, and unforgettable moments — each venue a stage for your story.</p>
            <button onClick={handleVenues}>Venue List</button>
            <div className="venue-grid"> 
                {venues.map((venue) => (
                    <VenueCard key={venue.id} card={venue} />
                ))}
                {/* <VenueCard card={venueList} /> */}
            </div>
        </div>
    );
}