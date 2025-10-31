import {useState} from "react";
import "../App.css"
import supabase from "../utils/supabase";

export default function Venues(){
    const [venues, setVenues] = useState([]);

    //retrieve venue list
    async function handleVenues(){
        console.log("Venue button clicked")
        //storing result of fetch from supabase into a variable
        const result = await supabase.from("venues").select().order("rating");
        const data = result.data;
        setVenues(data);
    }


    //empty list for venues
    const venueList = [];

   //put venue list into a list item table with attributes attached
    for(let i = 0; i < venues.length ; i++){
        venueList.push(
            <li key={venues[i].id}>
                {venues[i].thumbnail} {venues[i].title} {venues[i].address} {venues[i].rating} {venues[i].website}
            </li>
        )
    }



    return(
        <>
            <h1> Explore Our Venue Library!</h1>
            <ul>
                {venueList}
            </ul>
            <button onClick={handleVenues}>Venue List</button>
        </>
    );
}