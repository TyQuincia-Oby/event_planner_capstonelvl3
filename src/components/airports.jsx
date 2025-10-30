import {useState} from "react";
//import "./App.css"
import supabase from "../utils/supabase";


export default function Airports(){
    const [airports, setAirports] = useState([]);

    async function getAirports() {
        const {data , error } = await supabase("airports").select()
        
    }

    return(
        <>
            <h1>Busiest Airports in The USA</h1>
        </>
    );
}