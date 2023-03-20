function App() {
  const company = "Frontend Co.";
  const description = "Lorem ipsum dolor sit amet";
  const courses = [
    { id: 1, course: "HTML asldkşalkdsşlak" },
    { id: 2, course: "CSS" },
    { id: 3, course: "JAVASCRIPT" },
    { id: 4, course: "REACT" },
  ];

  return (
    <div className="App">
      <h1>{company}</h1>
      <p>{description}</p>
      <h4>{`Courses (${courses.length})`}</h4>
      {/* <li>{courses[0].course}</li>
      <li>CSS</li>
      <li>JAVASCRIPT</li>
      <li>REACT</li> */}
<ul>
  {courses.map((e, i ) => <li key={e.id}>{e.course}</li>)}
</ul>

    </div>
  );
}

export default App;
