import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Pagination from "./components/Pagination";
const url = "https://rickandmortyapi.com/api/character";

export const App = () => {
  const [personajes, setPersonajes] = useState([]);
  const [info, setInfo] = useState({});

  const titulo = "Rick and Morty";

  const fetchPersonajes = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setPersonajes(data.results);
      setInfo(data.info);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPersonajes('https://rickandmortyapi.com/api/character');
  }, []);

  const onSiguiente = () => {
    fetchPersonajes(info.next);

  }

  const onAnterior = () => {
    fetchPersonajes(info.prev);
  }

  return (
    <>
      <Navbar titulo={titulo} />
      <Pagination onSiguiente={onSiguiente} onAnterior={onAnterior}/>
      <div className="container">

        <div className="row mt-4">
          {personajes.map((item) => (
            <Card key={item.id} item={item}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
