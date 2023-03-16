import { useState, useEffect } from "react";
import EventCard from "./event";
import CardGroup from "react-bootstrap/CardGroup";
import EventForm from "./eventForm";

function Events() {
  const [events, setEvents] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("http://localhost:8086/api/events")
      .then((response) => response.json())
      .then((events) => {
        setEvents(events);
        console.log("Events fetched...", events);
      });
  }, []);

  //const postRequest = () => {};

  return (
    <div>
      <CardGroup className="Events">
        {events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            location={event.location}
            time={event.eventtime}
          />
        ))}
        <EventForm />
      </CardGroup>
    </div>
  );
}

export default Events;
