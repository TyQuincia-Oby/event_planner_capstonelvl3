import {useState} from "react"
import supabase from "../utils/supabase";



export default function Desktop(){

    const [allGuests, setAllGuests] = useState([]);
    const [goingGuests, setGoingGuests] = useState(0);
    const [notGoingGuests, setNotGoingGuests] = useState(0);
    
   console.log (allGuests) 

    async function totalGuests(){
        //fetch guests from supabase
        const {data, error} = await supabase.from("guests").select();
        //prompt if theres an error
        if (error){
            console.error("Error loading guests: ", error);
            return;
        }

        //store all guests
        setAllGuests(data);
       
        //reduce (count) totals for guests coming and not coming
        let goingCount= 0;
        let notGoingCount = 0;

        for(let i = 0; i < data.length ; i++){
            const guest = data[i];
            if (guest.attending===true){
                goingCount++;
            } else if (guest.attending===false){
                notGoingCount++;
            }
        }
        //update counts
        setGoingGuests(goingCount);
        setNotGoingGuests(notGoingCount);
    }      


    return(
        <div>
            <h1>Welcome to your Desktop!</h1>
            <div className="eventData">
                <p>Number of days until event:  </p>
                <div className="row">
                    <div className="col">
                    <p>Total Guests Invited: {allGuests.length} </p>
                    <p>Total Guests Will Attend: {goingGuests} </p>
                    <p>Total Guests Will Not Be Attending: {notGoingGuests} </p>
                    <p>Venue Chosen: </p>
                    </div>
                </div>
                <button onClick={totalGuests}>Get Stats</button>
            </div>
        </div>
    );
}