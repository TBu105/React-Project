import { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);

  const clearAll = () => {
    setPeople([]);
  };

  return (
    <div className="container">
      <h2>{people.length} birthdays today</h2>
      <List people={people} />
      <button onClick={clearAll}>Clear All</button>
    </div>
  );
}

export default App;
