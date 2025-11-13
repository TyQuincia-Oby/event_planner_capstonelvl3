import {useEffect, useState} from "react"
import supabase from "../utils/supabase";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import CountdownTimer from "../components/countdown";
import LoginPage from "../components/login"


ChartJS.register(ArcElement, Tooltip, Legend);

function Chart({goingGuests, notGoingGuests}) {
const data = {
  labels: ['Attending', 'Not Attending'],
  datasets: [
    {
      label: '# of Guests',
      data: [goingGuests, notGoingGuests],
      backgroundColor: [
        '#7D8C8A',
        '#5A4659',
        
      ],
      borderColor: [
        '#fff',
        '#fff',
      ],
      borderWidth: 1,
    },
  ],
};
  return <Pie data={data} />;
}


export default function Desktop(){

    const [allGuests, setAllGuests] = useState([]);
    const [goingGuests, setGoingGuests] = useState(0);
    const [notGoingGuests, setNotGoingGuests] = useState(0);
    
    // useState variable for current date
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (newDate) =>{
        setSelectedDate(newDate);
    }

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

        // for(let i = 0; i < data.length ; i++){
        //     const guest = data[i];
       for (let guest of data){
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
    //added to make pie chart work
    useEffect(()=>{totalGuests();},[]);
    
    //user pojo
    let  user= {
        typeOfEvent : "Birthday",
        dateOfEvent : "November 6, 2025",
        venueChosen : " Park73",
        firstName : "TyQuincia",
        email: "tyquinciaoby@gmail.com",
        phone: "(555)123-4567"

       
    }

    

    return(
        <div>
            <h1>Welcome {user.firstName} to your Desktop!</h1>
            <p>Keep track of all your event details here...</p>
            <div className="eventData">
                {/* Passing current date in */}
                <h3>Today is {selectedDate.toLocaleDateString()} </h3>
                
               
                {/* Break up desktop into 3 sections for easier readability */}
                <div className="row">
                    <div className="col">
                        <h3>Personal Information: </h3>
                        <p>Your Name: {user.firstName}</p>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                    </div>
                    <div className="col">
                        <h3>Event Information:</h3>
                        <p>Event Type: {user.typeOfEvent}</p>
                        <p>Date of Event: {user.dateOfEvent}</p>
                        <p>Total Guests Invited: {allGuests.length} </p>
                        <p>Total Guests Will Attend: {goingGuests} </p>
                        <p>Total Guests Will Not Be Attending: {notGoingGuests} </p>
                        <p>Venue Chosen: {user.venueChosen}</p>
                        <button onClick={totalGuests}>Get Stats</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3>Event Data</h3>
                        <div className="graph">
                            <Chart goingGuests={goingGuests} notGoingGuests={notGoingGuests} />
                        </div>
                    </div>
                    {/* user control of countdown timer (form) */}
                    <div className="col">
                        <CountdownTimer/>
                    </div>
                </div>
            </div>
        </div>
    );
}