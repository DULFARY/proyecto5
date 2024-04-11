import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { useEffect, useRef, useState } from "react";
import LisPokemons from "../components/PokedexPage/LisPokemons";
import SelecType from "../components/PokedexPage/SelecType";
import "./style/PokedexPage.css";
import Pagination from "./Pagination.jsx";
import pokefranja from '../../public/pokefranja.png'
import  imagen from '../../public/imagen.png'

const pokedexPage = () => {
  const [pokeSearch, setpokeSearch] = useState("");
  const [typeSelected, setTypeSelected] = useState("allpokemons");
  const [page, setpage] = useState(20);
  const [pages, setpages] = useState(0);
  const [counter, setCounter] = useState(0);

  const inputSearch = useRef();

  const trainer = useSelector((states) => states.trainer);

  const url = `https://pokeapi.co/api/v2/pokemon?limit=${page}&offset=${pages}`;

  const [pokemons, getpokemons, getPokeByType] = useFetch(url);

  useEffect(() => {
    if (typeSelected === "allpokemons") {
      getpokemons();
    } else {
      getPokeByType(typeSelected);
    }
  }, [typeSelected, url]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setpokeSearch(inputSearch.current.value.trim().toLowerCase());
  };

  const pokemonsFiltered = pokemons?.results.filter((poke) => {
    return poke.name.includes(pokeSearch);
  });

  return (
    <div className="podexconte">
      <div className= "imagenes_container">
      <img className="franja_imagen" src= {pokefranja}alt="" />
      <img className="imagen_nombre"  src={imagen} alt="" />
      </div>
      <p className="pokedexP_h1">
        <span className="trainer">Welcome {trainer}</span>, here you can find
        your favorite pokemon
      </p>
      <div className="pokedex_varios">
        <form className="pokedexP_form" onSubmit={handleSubmit}>
          <input className="pokedexP_input" ref={inputSearch} type="text" />
          <button className="pokedexP_btn">search</button>
        </form>
        <div className="all">
          <SelecType setTypeSelected={setTypeSelected} />
        </div>
      </div>

      <Pagination
        setpage={setpage}
        page={page}
        setpages={setpages}
        pages={pages}
        setCounter={setCounter}
        counter={counter}
      />
      <div className="filtered">
        <LisPokemons pokemons={pokemonsFiltered} />
      </div>
    </div>
  );
};

export default pokedexPage;
