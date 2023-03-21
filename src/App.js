import Card from "./components/Card";
import Heading from "./components/Heading";

function App() {
  const data = [
    {
      id: 1,
      image:
        "https://us.123rf.com/450wm/paseven/paseven2111/paseven211100107/178010162-reticolo-senza-giunte-con-vecchi-francobolli-con-luoghi-da-diversi-paesi-sfondo-ripetuto-in-stile.jpg?ver=6",
      tittle: "Travel 1",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, beatae. Repudiandae repellat laudantium alias, recusandae culpa velit voluptatem molestiae, excepturi, id accusantium nostrum quibusdam. Ab nobis hic eveniet animi aut illum in totam, iure autem, unde assumenda iste ipsum. Debitis itaque illum tempore consequuntur deleniti. Repudiandae iure veniam tempore facere!",
    },
    {
      id: 2,
      image:
        "https://us.123rf.com/450wm/paseven/paseven2111/paseven211100107/178010162-reticolo-senza-giunte-con-vecchi-francobolli-con-luoghi-da-diversi-paesi-sfondo-ripetuto-in-stile.jpg?ver=6",
      tittle: "Travel 2",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, beatae. Repudiandae repellat laudantium alias, recusandae culpa velit voluptatem molestiae, excepturi, id accusantium nostrum quibusdam. Ab nobis hic eveniet animi aut illum in totam, iure autem, unde assumenda iste ipsum. Debitis itaque illum tempore consequuntur deleniti. Repudiandae iure veniam tempore facere!",
    },
    {
      id: 3,
      image:
        "https://us.123rf.com/450wm/paseven/paseven2111/paseven211100107/178010162-reticolo-senza-giunte-con-vecchi-francobolli-con-luoghi-da-diversi-paesi-sfondo-ripetuto-in-stile.jpg?ver=6",
      tittle: "Travel 3",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, beatae. Repudiandae repellat laudantium alias, recusandae culpa velit voluptatem molestiae, excepturi, id accusantium nostrum quibusdam. Ab nobis hic eveniet animi aut illum in totam, iure autem, unde assumenda iste ipsum. Debitis itaque illum tempore consequuntur deleniti. Repudiandae iure veniam tempore facere!",
    },
  ];
  return (
    <div>
      <Heading bgColor={"#666"} color={"white"} />

      {data.map((item) => (
        <Card
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
