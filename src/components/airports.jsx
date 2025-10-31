import {useState} from "react";
//import "./App.css"
import supabase from "../utils/supabase";


export default function Airports(){
    const [airports, setAirports] = useState([]);
    const airportList = [];

    async function getAirports() {
        const result = await supabase.from("airports").select().order("country")
        const data = result.data;
        setAirports(data);
    }

    for (let i = 0; i < airports.length; i++){
        airportList.push(
            <li key={airports[i].id}>
                {airports[i].rank} {airports[i].year} {airports[i].airport} {airports[i].airport_code} {airports[i].location} {airports[i].country}
            </li>
        )
    }

    return(
        <>
            <h1>Busiest Airports in The USA</h1>
            {airportList}
            <button onClick={getAirports}>Let's Fly!</button>
        </>
    );
}