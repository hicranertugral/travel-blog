import Card from "./components/Card";
import data from "./data/db";
import Heading from "./components/Heading";
import { useState } from "react";
import CardList from "./components/CardList";

function App() {
  const [travelData, setTravelData] = useState(data);
  return (
    <div>
      <Heading bgColor={"#666"} color={"white"} />
{/* 
      {data.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          text={item.text}
          image={item.image}
        />
      ))} */}

      <CardList travels={travelData}/>
    </div>
  );
}

export default App;
