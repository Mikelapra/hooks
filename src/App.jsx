import './App.css';
import useCustomHook from "./hooks/useCustomHook";
import Pokemon from "./components/Pokemon";
import RickMorty from "./components/RickMorty";


function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRickMorty = 'https://rickandmortyapi.com/api/character/1';

  const {data: pokemon} =useCustomHook(urlPokemon);

  const {data: rickMorty}  = useCustomHook(urlRickMorty)


  return (
    <>
      {pokemon && ( 
      <Pokemon name= {pokemon.forms[0].name} imagen={pokemon.sprites.front_default}/>
      )}
      
      {rickMorty &&(
      <RickMorty name= {rickMorty.name} imagen={rickMorty.image}/>)}
      
    </>
  );
}

export default App;
