import { useState } from "react";

export default function PokemonListViewModel ({GetPokemonsUseCase} : {GetPokemonsUseCase: any})  {

    const [error, setError] = useState("");
    const [pokemons, setPokemons] = useState([]);

    async function getPokemons() {
        const { result, error } = await GetPokemonsUseCase.execute();
        setError(error)
        setPokemons(result)
    }
    return {
        error,
        getPokemons,
        pokemons,
    }
} 