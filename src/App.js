import Heading from "./components/Heading";

function App() {
  return (
    <div>
      <Heading bgColor={"#666"} color={"white"} />
    </div>
  );
}

Heading.defaultProps = {
  title: "Default Heading",
  color: "#36b",
  bgColor: "#333",
};

export default App;
