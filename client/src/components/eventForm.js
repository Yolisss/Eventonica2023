import React from "react";
import { useState } from "react";

export default function EventForm() {
  let [input, setInput] = useState("");

  const onChange = (event) => {
    //by console logging, was able to confirm we are receiving values in our console
    //console.log(event.target.value);
    setInput(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(input);
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input type="text" value={input} onChange={onChange} />
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
