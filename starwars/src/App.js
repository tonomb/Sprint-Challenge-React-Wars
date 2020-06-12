import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  const [searchText, setSearchText] = useState('')
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // get Characters from Rick and Morty API on first render 
  useEffect(()=>{
    axios.get('https://rickandmortyapi.com/api/character/')
      .then( res =>{
          setCharacters(res.data.results);  
      })
      .catch(err =>{
        console.log(err);
    })
  },[])


  function searchHandler(e){
    setSearchText(e.target.value)
  }


  return (
    <div className="App">
      <h1 className="Header">The World of Rick & Morty</h1>
      <form>
        <input type='text' 
        placeholder='Search Characters' 
        className='search'
        onChange={searchHandler}>
        </input>
      </form>
      {
        characters.map( character =>{
          return <Character key={character.id} characterInfo={character}></Character>
        })
      }
    </div>
  );
}

export default App;
