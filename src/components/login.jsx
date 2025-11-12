//Authenticate the user and save their details in local storage
import Desktop from "../pages/desktop"
import supabase from "../utils/supabase"
export default function LoginPage ({loginComplete}){

    async function signIn(email, password){
        //sign in user with email and password
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        })
        console.log('log in handled');
        console.log(data); //print whats typed
        console.log(error);
        return data?.user || null; //returns current user & wont crash if login fails
    }

    async function handleLogin(event){
        event.preventDefault();//keeps page from reloading
        const email = event.target.elements.email.value;//stores user email
        const password = event.target.elements.password.value;//stores user password
        const user = await signIn(email,password);
        loginComplete(user);
    }

    
    return(
        <div className="login">
            <h1>Event Planning SideKick</h1>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <h3>App Features</h3>
                <div className="carousel-inner">
                    <div className="carousel-item ">
                        <p>Event guests can browse the busiest airports, ensuring proper arrival times for inbound guests</p>
                        <img src="/airportscreen.png" className="d-block w-100" alt="airport"/>
                    </div>
                    <div className="carousel-item">
                        <p>Browse our amazing list of quality venues, even if you've chosen one</p>
                        <img src="/venuescreen.png" className="d-block w-100" alt="venue"/>
                    </div>
                    <div className="carousel-item">
                        <p>Keep track of your event's details and even create a countdown until the BIG day</p>
                        <img src="/desktopscreen.png" className="d-block w-100" alt="desktop"/>
                    </div>
                    <div className="carousel-item active">
                        <p>Keep track of whom may be attending and add more guests to celebrate as you divulge your journey</p>
                        <img src="/guestlistscreen.png" className="d-block w-100" alt="desktop"/>
                    </div>
                </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>

            {/* report pages */}
            {/* <div className="info">
                <div className="row">
                    <div className="col">
                        <button>Venues</button>
                        <button>Airports</button>
                    </div>
                    <div className="col"></div>
                </div>
            </div> */}

            {/* login */}
            <div className="guest-form">
                <h3>Sign In Here...</h3>
                <form onSubmit={handleLogin}>    
                    {/* <label htmlFor="username">
                        Username: 
                        <input type="text" name="username" required/>
                    </label> */}
                    <br />
                    <label >
                        Email: 
                        <input type="email" name="email" required/>
                    </label>
                    <br />                      
                    <label>
                        Password: <input type="password" name="password" required />
                    </label>
                    <br />
                    <button type="submit">
                        Get Planning...
                    </button>                    
                </form>
            </div>

            {/* <div className="no-credentials">
                <div className="row">
                    <div className="col">Guest Login</div>
                    <div className="col">New User</div>
                </div>
            </div> */}
        </div>
    )
}