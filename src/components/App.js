import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

function About() {
  return (
    <div id="about">
      <h1>About</h1>
    </div>
  );
}

function ExampleComponent() {
  return <div>Whoa!</div>;
}
function TestComponent() {
  return (
    <iframe
      title="time video"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/5TbUxGZtwGI"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
    ></iframe>
  );
}
function App() {
  return (
    <div>
      <NavBar />
      {<ExampleComponent />}
      {<TestComponent />}
      {<Home />}
      {<About />}
    </div>
  );
}

export default App;
