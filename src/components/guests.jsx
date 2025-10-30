import {useState} from "react";
import "../App.css"


export default function Guests(){
    const [guests, setGuests] = useState([]);

    console.log("Hello from guest list!");

    return(
        <>
            <h1>Hello from Guest List</h1>
        </>
    );
}