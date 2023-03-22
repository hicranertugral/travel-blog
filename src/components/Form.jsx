import React, { useState } from "react";

const Form = ({ propHandler }) => {
  const [photo, setPhoto] = useState("");
  const [location, setlocation] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    propHandler({
      id: Math.floor(Math.random() * 10000) + 1,
      Image: photo,
      title: location,
      text: notes,
    });
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h2>Travel Form</h2>
        <div className="fi">
          <label htmlFor={"travel-photo"}>Travel Photo URL</label>
          <input
            onChange={(e) => setPhoto(e.target.value)}
            type="text"
            id={"travel-photo"}
          />
        </div>

        <div className="fi">
          <label htmlFor={"travel-location"}>Travel Country</label>
          <input
            onChange={(e) => setlocation(e.target.value)}
            type="text"
            id={"travel-location"}
          />
        </div>

        <div className="fi">
          <label htmlFor={"travel-notes"}>Travel Notes</label>
          <textarea
            onChange={(e) => setNotes(e.target.value)}
            cols="30"
            rows="10"
            maxLength={250}
            id={"travel-notes"}
          />
        </div>

        <div>
          <input type="submit" value={"Add Travel"} />
        </div>
      </form>
    </div>
  );
};

export default Form;
