import React, { useEffect, useState } from 'react'
import { List } from '../../../components/List';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../../../components/NavBar';

type Pokemon = {
    name: string,
    id: number
}

export const PokemonList = () => {

    let navigate = useNavigate();

    useEffect(() => {
        getPokemons()
    }, []);

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    const getPokemons = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
            .then(data => data.json())
            .then(r => console.log(r))
            // .then(result => setPokemons([{ name: result.name, id: result }]));
    }

    return (
        <>
        <NavBar/>
            <h1 style={{color: "#4fe2c1"}}>Pokemons</h1>
            <List />
        </>
    )
}

