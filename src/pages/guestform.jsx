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
    </form>
  );
}
