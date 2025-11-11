//Authenticate the user and save their details in local storage
import Desktop from "../pages/desktop"
export default function LoginPage ({handleLogin}){
    
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
            <div className="info">
                <div className="row">
                    <div className="col">
                        <button>Venues</button>
                        <button>Airports</button>
                    </div>
                    <div className="col"></div>
                </div>
            </div>

            {/* login */}
            <div className="guest-form">
                <h3>Sign In Here...</h3>
                <form >    
                    <label htmlFor="username">
                        Username: 
                        <input type="text" name="username" />
                    </label>
                    <br />
                    <label htmlFor="email">
                        Email: 
                        <input type="email" name="email" />
                    </label>
                    <br />                      
                    <label htmlFor="password">
                        Password: <input type="password" name="password" />
                    </label>
                    <br />
                    <button onClick={handleLogin}>
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