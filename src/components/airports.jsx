import {useState} from "react";
//import "./App.css"
import supabase from "../utils/supabase";


export default function Airports(){
    const [airports, setAirports] = useState([]);
    const airportList = [];

    async function getAirports() {
        const result = await supabase.from("airports").select().eq("year", 2016);
        const data = result.data;
        setAirports(data);
    }
    

    // for (let i = 0; i < airports.length; i++){
    //     airportList.push(
    //         <li key={airports[i].id}>
    //             {airports[i].rank} {airports[i].year} {airports[i].airport} {airports[i].airport_code} {airports[i].location} {airports[i].country}
    //         </li>
    //     )
    // }
    function Airports(){
        return(
            <>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Airport Code</th>
                                <th>Airport</th>
                                <th>Total Passengers</th>
                                <th>Location</th>
                                <th>Country</th>
                                <th>Id</th>
                            </tr>
                        </thead>
                        <tbody>
                            {airports.map((airport)=>(
                                <tr key={airport.id}>
                                    <td>{airport.rank}</td>
                                    <td>{airport.airport_code}</td>
                                    <td>{airport.airport}</td>
                                    <td>{airport.total_passengers}</td>
                                    <td>{airport.location}</td>
                                    <td>{airport.country}</td>
                                    <td>{airport.id}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
    

    return(
        <>
            <h1>🛫Busiest Airports in The USA</h1>
            <p>Where the world never stops moving — explore the airports so busy, even your coffee needs a boarding pass.</p>
            {/* <ul>{airportList}</ul> */}
            <button onClick={getAirports}>Let's Fly!</button>
            <Airports />
        </>
    );
}