import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyMessage from "./message";
import PostList from "./Component/Posts";
import ToggleButton from "./Component/ToggleButton";
function App() {
  const clickHandler = () => {
    alert("Kuldeep");
  };

  return (
    <div className="App">
      <PostList />
      <ToggleButton />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyMessage message="Learning React" clickHandler={clickHandler} />
      </header>
    </div>
  );
}

export default App;
