export default function NewUser(){

    function createAccount(){
        console.log("Account Created")
    }
    return(
        <div className="new-account">
            <form onSubmit="createAccount">
                <label>
                    First Name: 
                    <input type="text" name="first_name" id="first_name" required/>
                </label>
                <label >
                    Last Name:
                    <input type="text" name="last_name" id="last_name" required/>
                </label>
                <label >
                    Email:
                    <input type="email" name="email" id="email" required/>
                </label>
                <label>
                    Date of Event:
                    <input type="date" name="date" id="date" required/>
                </label>
                <select >
                    Event Type:
                    <option value="" defaultValue="Choose Type">Choose Type</option>
                    <option value="wedding">Wedding</option>
                    <option value="ball">Ball</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="quinceanera">Quinceanera</option>
                    <option value="showerbride">Bridal Shower</option>
                    <option value="showerbaby">Baby Shower</option>
                    <option value="specialty">Specialty Party</option>
                    <option value="anniverary">Anniversary</option>
                    <option value="none">None Chosen</option>
                </select>
                <button>Submit</button>
            </form>
            
        </div>
        
    )
}

import deleteGuest from "../components/guests"

export default function GuestForm({ addGuest }) {
  return (
    <form onSubmit={addGuest} className="guest-form">
      <h2>Add a New Guest</h2>

      <label>
        Household Name:
        <input type="text" name="householdName" required />
      </label>

      <label>
        First Name:
        <input type="text" name="firstName" required />
      </label>

      <label>
        Address:
        <input type="text" name="guestAddress" required />
      </label>

      <label>
        Household Size:
        <input type="number" name="householdSize" min="1" required />
      </label>

      <label>
        Attending:
        <select name="attending" required>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </label>

      <button type="submit">Add Guest</button>
      <button onClick={deleteGuest}>Delete Guest</button>
    </form>
    
  );
}
