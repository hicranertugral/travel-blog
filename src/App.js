import Card from "./components/Card";
import data from "./data/db";
import Heading from "./components/Heading";
import { useState } from "react";
import CardList from "./components/CardList";

function App() {
  const [travelData, setTravelData] = useState(data);
  return (
    <div>
      <Heading  />
      <CardList travels={travelData}/>
    </div>
  );
}

export default App;
