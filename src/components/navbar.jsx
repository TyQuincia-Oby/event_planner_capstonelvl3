//access the report and form pages (and log in if implemented)
import {useState} from "react";

export default function Navbar(){
 console.log("Hello from Navbar")

    return(
        <div>
            <nav>
                <button>Venues</button>
                <button>Airports</button>
                <button>Desktop</button>
                <button>Home</button>
                <button>Add Guest</button>
                <button>Get Guest List</button>
            </nav>
        </div>

    );
}