import {useState} from "react";
import "../App.css"
import supabase from "../utils/supabase";



export default function Guests(){
    const [guests, setGuests] = useState([]);
    const guestList = [];

    console.log("Hello from guest list!");

    for(let i = 0; i < guests.length; i++){
        guestList.push(
            <li key={guests[i].id}>
                {guests[i].household_name} {guests[i].first_name} {guests[i].household_size} {guests[i].address} {guests[i].attending} {guests[i].user_id}
            </li>

        )
    }

    async function handleGuests() {
        console.log("Getting guests")
        const result = await supabase.from("guests").select().order("household_name")
        const data = result.data;
        setGuests(data);
    
    }

    return(
        <>
            <h1>Hello from Guest List</h1>
            <ul>
                {guestList}
            </ul>
            <button onClick={handleGuests}>Show Guests</button>
        </>
    );
}