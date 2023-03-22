import React, { useState } from "react";

const Form = () => {
  const [photo, setPhoto] = useState("");
  const [location, setlocation] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    console.log(photo);
    console.log(location);
    console.log(notes);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="travel-form">
        <h2>Travel Form</h2>
        <div>
          <label htmlFor={"travel-photo"}> Travel Photo</label>
          <input
            onChange={(e) => setPhoto(e.target.value)}
            type="text"
            id={"travel-photo"}
          />
        </div>

        <div>
          <label htmlFor={"travel-location"}> Travel Country</label>
          <input
            onChange={(e) => setlocation(e.target.value)}
            type="text"
            id={"travel-location"}
          />
        </div>

        <div>
          <label htmlFor={"travel-notes"}> Travel Notes</label>
          <textarea
            onChange={(e) => setNotes(e.target.value)}
            cols="30"
            rows="10"
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
