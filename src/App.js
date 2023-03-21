function App() {
  const company = "Frontend Co.";
  const description = "Lorem ipsum dolor sit amet";
  const courses = [
    { id: 1, course: "HTML asldkşalkdsşlak" },
    { id: 2, course: "CSS" },
    { id: 3, course: "JAVASCRIPT" },
    { id: 4, course: "REACT" },
  ];

  let showCourses = true;
  return (
    <div>
      <h1 className="heading">{company}</h1>
      <p>{description}</p>
      {showCourses && (
        <div>
          <h4>{`Courses (${courses.length})`}</h4>
          <ul>
            {courses.map((e, i) => (
              <li key={e.id}>{e.course}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
