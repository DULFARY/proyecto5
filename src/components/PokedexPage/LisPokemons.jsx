import PokeCard from './PokeCard'
import './style/Lispokemons.css'
const LisPokemons = ({pokemons}) => {
  return (
    <div className='lispoke'>
        {
          pokemons?.map(pokeInfo =>(
            <PokeCard
              key={pokeInfo.url}
              pokeInfo={pokeInfo}
            
            />

          ))  
        }
    </div>
  )
}

export default LisPokemons