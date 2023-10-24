import React, { useState } from 'react';

const BookingForm = () => {
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guest, setGuest] = useState("");
  const [occassion, setOccassion] = useState("");

  const handleSubmit = (e) = >{
      e.preventDefault();
      props.SubmitForm(e);
}
const handleChange = (e) = >{
    setDate(e);
props.dispatch(e);
}
return(
  <header>
  <section>
  <form onSubmit={handleSubmit}>
  <fieldset>
  <div>
    <label htmLFor='book-date'>Choose Date: </label>
    <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)}
type='date' required/>
  </div>
<div>
  <label htmLFor='book-time'>Choose Time: </label>
  <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)}>
    <option value="">Select a time</option>
{
    props.availableTimes.availableTimes.map(availableTimes => {return <option key=
      {availableTimes}>{availableTimes}</option>})
      </select>
      </div>
      </fieldset>
      </form>
      </section>
      </header>
    );
};
export default BookingForm;
