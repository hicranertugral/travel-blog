import Card from "./components/Card";
import data from "./data/db";
import Heading from "./components/Heading";

function App() {
  // console.log(data)
  return (
    <div>
      <Heading bgColor={"#666"} color={"white"} />

      {data.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          tittle={item.tittle}
          text={item.text}
          item={item.image}
        />
      ))}
    </div>
  );
}

export default App;
