import React from "react";
import { useState } from "react";

export default function EventForm() {
  let [event, setEvent] = useState({
    title: "",
    location: "",
    eventtime: "",
  });

  //saving our input changes
  //ex.c..ca..cat
  //updating value
  //cat
  const onChange = (event) => {
    //by console logging, was able to confirm we are receiving values in our console
    //console.log(event.target.value);
    setEvent(event.target.value);
  };

  //now that input value is saved
  //we want to render that data to frontend
  //when user clicks on button
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <label>Title:</label>
        <input
          type="text"
          id="add-event-title"
          placeholder="Event Title"
          value={event.title}
          onChange={onChange}
        />
        <label>Date:</label>
        <input
          id="add-event-date"
          type="date"
          placeholder="Event Date"
          value={event.location}
          onChange={onChange}
        />
        <label>Time:</label>
        <input
          id="event-add-time"
          placeholder="Add time"
          value={event.eventtime}
          onChange={onChange}
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
