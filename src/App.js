import React, { useState } from "react";
import { people as data } from "./data";
const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <div className="w-full h-screen p-relative">
      <div className="p-center card bg-white">
        <header>{people.length} birthdays today</header>
        <ul>
          {people.map((person) => {
            return (
              <li key={person.id}>
                <img src={person.image} alt="" />
                <article>
                  <h6>{person.name}</h6>
                  <p>{person.age} years</p>
                </article>
              </li>
            );
          })}
        </ul>
        <footer>
          <button onClick={() => setPeople([])}>clear all</button>
        </footer>
      </div>
    </div>
  );
};

export default App;
