import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import "./style/PokeDetailPage.css";
import pokefranja from '../../public/pokefranja.png'
import imagen from '../../public/imagen.png'
const PokeDetailPage = () => {
  const { name } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const [pokemon, getPokemon] = useFetch(url);

  useEffect(() => {
    getPokemon();
  }, [name]);

  console.log(pokemon);

  return (

    <div className="detail">
      
      <div className="imagenes">
      <img className="imagen_franja" src={pokefranja} alt="" />
      <img className="imagen" src={imagen} alt="" />
      </div>
      <div className={`color bg-${pokemon?.types[0].type.name}`}></div>
      <header className="detail_header">
        <img
          className="detail_image"
          src={pokemon?.sprites.other["official-artwork"].front_default}
          alt=""

          
        />
      </header>
      <section className="detalinfo">
        <div className="detail_number">#{pokemon?.id}</div>
        <h2 className={`detail_name `} > {pokemon?.name}</h2>
        <div className="container12">
          <div className="detail_conte1">
            <p className="detail_dactos">height</p>
            <p className="detail_value">{pokemon?.height}</p>
          </div>
          <div className="detail_conte2">
            <p className="detail_dactos">weight</p>
            <p className="detail_value">{pokemon?.weight}</p>
          </div>
        </div>

        <div className="container3">

        <div className="container_type">
          <p className="detail_label">type</p>

          <div className="container_value">
          {pokemon?.types.map((typeInfo) => (
            <p key = {typeInfo.type.url}className="detail_valor"> {typeInfo.type.name}</p>
          ))}
          </div>
        </div>

        <div className="container_hability">
          <p className="detail_label">hability</p>

          <div className="container_value">
          {
            pokemon?.abilities.map(abiliti => (
              <p key ={abiliti.ability.url}className="detail_valor">{abiliti.ability.name}</p>


            ))
          }

          </div>
        </div>
        </div>

      </section>
      <section className="detail_estado">
        <p className="estado">stats</p>
        
        {
          
          pokemon?.stats.map(statInfo => (
            <div>
           <p className="stats_name" key ={statInfo.stat.url} > {statInfo.stat.name}</p>
           <p className="number_stats">{statInfo.base_stat}/255</p>
           <div className="barra_estado">
            <div style={{width: statInfo.base_stat/255*100+'%'}} className="color_estado">

            </div>

           </div>


           </div>
           
          
          ))
        }

      </section>
      <section className="movimientos">
        <p className="movi_poke">movements</p>
        {
          pokemon?.moves.map(movements => (
            <span key ={movements.move.url}className="move_name"> {movements.move.name}


            </span>
          ))
        }

      </section>
      
    </div>
  );
};

export default PokeDetailPage;
