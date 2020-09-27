import React, { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [astronauts, setAstronauts] = useState([]);

  const getAstros = async () => {
    const result = await fetch("http://api.open-notify.org/astros.json");
    const body = await result.json();
    setAstronauts(body.people);
  };

  useEffect(() => {
    getAstros();
  }, []);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Craft</th>
          </tr>
        </thead>
        <tbody>
          {astronauts.map((astro) => (
            <tr key={astro.name}>
              <td>{astro.name}</td>
              <td>{astro.craft}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
