import React from "react";
import { useState } from "react";

export default function EventForm() {
  const [event, setEvent] = useState({
    title: "",
    location: "",
    eventtime: "",
  });

  //saving our input changes
  //ex.c..ca..cat
  //updating value
  //cat
  const handleTitleChange = (e) => {
    e.preventDefault();
    let newTitle = e.target.value;
    setEvent((event) => ({ ...event, title: newTitle }));
    //console.log(event.title);
  };
  const handleLocationChange = (e) => {
    e.preventDefault();
    let newLocation = e.target.value;
    setEvent((event) => ({ ...event, location: newLocation }));
  };

  const handleDateChange = (e) => {
    e.preventDefault();
    let newDate = e.target.value;
    setEvent((event) => ({ ...event, eventtime: newDate }));
  };

  //now that input value is saved
  //we want to render that data to frontend
  //when user clicks on button
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          id="add-event-title"
          placeholder="Event Title"
          value={event.title}
          onChange={handleTitleChange}
        />
        <label>Location:</label>
        <input
          id="add-event-location"
          type="text"
          placeholder="Event Location"
          value={event.location}
          onChange={handleLocationChange}
        />
        <label>Date:</label>
        <input
          type="date"
          id="event-add-time"
          placeholder="add-event-date"
          value={event.eventtime}
          onChange={handleDateChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
// onSubmit={handleSubmit}
//in our input, we have onChange that will be called
//within it, we have setInput that will hold the new value
//of input. Inside our input, we have value that's holding the current
//state of 'input'
// value={input} onChange={ChangedValue}
// onClick={UsersGuess}
