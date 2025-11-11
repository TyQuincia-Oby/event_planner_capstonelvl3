import { useState } from "react";
import "../App.css";
import supabase from "../utils/supabase";
import GuestForm from "../pages/guestform";

export default function Guests() {
  const [guests, setGuests] = useState([]);

  // Fetch ALL guests from Supabase
  async function handleGuests() {
    const { data } = await supabase
      .from("guests")
      .select()
      .order("household_name");
    setGuests(data);
  }

  //Fetch GOING guests
  async function willAttend(){
    const {data} = await supabase
    .from("guests")
    .select()
    .eq("attending", true)
    setGuests(data)
  }

  // Add a new guest
  async function addGuest(event) {
    event.preventDefault();

    const householdName = event.target.elements.householdName.value;
    const firstName = event.target.elements.firstName.value;
    const guestAddress = event.target.elements.guestAddress.value;
    const householdSize = event.target.elements.householdSize.value;
    const attending = event.target.elements.attending.value;

    const newGuest = {
      household_name: householdName,
      first_name: firstName,
      address: guestAddress,
      household_size: householdSize,
      attending: attending === "true", // convert string to boolean
    };

    console.log("Adding guest:", newGuest);

    await supabase.from("guests").insert(newGuest);

    // Refresh guest list
    const { data } = await supabase
      .from("guests")
      .select()
      .order("household_name");
    setGuests(data);

    event.target.reset(); // clear the form

    // //delete a guest
    // async function deleteGuest(){
    //   await supabase.from("guests").delete().eq('attending', false);
    //    // Refresh guest list
    //   const { data } = await supabase
    //     .from("guests")
    //     .select()
    //     .order("household_name");
    //   setGuests(data);
    // }
  }

  return (
    <>
      <h1>🥂 Hello from Guest List</h1>
      <p>
        The names behind the magic — a celebration of friends, family, and that
        one plus-one nobody saw coming.
      </p>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Household Name</th>
              <th>First Name</th>
              <th>Address</th>
              <th>Household Size</th>
              <th>RSVP</th>
            </tr>
          </thead>
          <tbody>
            {guests.map((guest) => (
              <tr key={guest.id}>
                <td>{guest.household_name}</td>
                <td>{guest.first_name}</td>
                <td>{guest.address}</td>
                <td>{guest.household_size}</td>
                <td
                  style={{
                    color: guest.attending ? "green" : "red",
                  }}
                >
                  {guest.attending ? "Yes" : "No"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button onClick={handleGuests}>Show Guests</button>
      <button onClick={willAttend}>Show Attending Guests</button>
      <GuestForm addGuest={addGuest} />
    </>
  );
}
