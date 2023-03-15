import React from "react";
import { useState } from "react";

export default function EventForm() {
  let [input, setInput] = useState("");

  const onChange = (event) => {
    //by console logging, was able to confirm we are receiving values in our console
    console.log(event.target.value);
  };
  return (
    <div>
      <form className="form">
        <input type="text" value={input} onChange={onChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
// onSubmit={handleSubmit}
// value={input} onChange={ChangedValue}
// onClick={UsersGuess}
