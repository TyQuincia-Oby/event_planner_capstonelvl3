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
                <div className="row">
                    <div className="col-8">
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <h2>App Features</h2>
                <div className="carousel-inner">
                    <div className="carousel-item ">
                        <h3>Event guests can browse the busiest airports, ensuring proper arrival times for inbound guests</h3>
                        <img src="/airport.jpg" className="d-block w-100" alt="airport"/>
                    </div>
                    <div className="carousel-item">
                        <h3>Browse our amazing list of quality venues, even if you've chosen one</h3>
                        <img src="/venue.jpg" className="d-block w-100" alt="venue"/>
                    </div>
                    <div className="carousel-item">
                        <h3>Keep track of your event's details and even create a countdown until the BIG day</h3>
                        <img src="/organization.jpg" className="d-block w-100" alt="desktop"/>
                    </div>
                    <div className="carousel-item active">
                        <h3>Keep track of whom may be attending and add more guests to celebrate as you divulge your journey</h3>
                        <img src="/guest.jpg" className="d-block w-100" alt="desktop"/>
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
            <div className="col-4">
            {/* login */}
            <div className="credentials">
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
            </div>
            {/* <div className="no-credentials">
                <div className="row">
                    <div className="col">Guest Login</div>
                    <div className="col">New User</div>
                </div>
            </div> */}
            </div>
        </div>
    )
}
