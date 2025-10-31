import {useState} from "react"


export default function Desktop(){




    return(
        <div>
            <h1>Welcome to your Desktop!</h1>
            <div className="eventData">
                <div className="row">
                    <p>Number of days until event: </p>
                    <p>Total Guests Invited: </p>
                    <p>Total Guests Will Attend: </p>
                    <p>Total Guests Will Not Be Attending: </p>
                    <p>Venue Chosen: </p>
                </div>
            </div>
        </div>
    );
}