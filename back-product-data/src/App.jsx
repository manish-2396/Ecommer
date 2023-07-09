import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import data from "../data.json";

function App() {
  const [count, setCount] = useState(0);

  console.log(data.kids);

  const handleClick = () => {
    fetch("http://localhost:8080/apidata", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data.womensData),
    })
      .then((res) => res.json())
      .then((res) => console.log("res", res));
  };

  return (
    <>
      <button onClick={handleClick}>button</button>
    </>
  );
}

export default App;
