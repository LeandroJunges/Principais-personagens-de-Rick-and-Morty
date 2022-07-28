import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Characters from "./components/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((json) => setCharacterList(json.results));
  }, []);
  return (
    <div className="App">
      <Characters characterList={characterList} />
    </div>
  );
}

export default App;
