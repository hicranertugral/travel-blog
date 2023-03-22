import data from "./data/db";
import Heading from "./components/Heading";
import { useState } from "react";
import CardList from "./components/CardList";
import Form from "./components/Form";

function App() {

  const [travelData, setTravelData] = useState(data);
  const propHandler= (travel) => setTravelData((previousState)=> [travel, ...previousState])
  return (
    <div>
      <Heading  />
      <Form propHandler = {propHandler}/>
      <CardList travels={travelData}/>
    </div>
  );
}

export default App;
