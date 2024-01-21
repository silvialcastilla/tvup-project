import { useState } from "react"


export default function PokemonDetailViewModel({ GetPokemonUseCase } : {GetPokemonUseCase: any}) {

    const [error, setError] = useState("")
    const [characteristic, setCharacteristics] = useState({
        id: null,
        name: "",
        image: "",
        abilities: []
    })

    async function getPokemon(id: string) {
        const { result, error } = await GetPokemonUseCase.execute(id);
        setError((error && error.message) || "")
        setCharacteristics({ ...result })
    }

    return {
        error,
        getPokemon, 
        ...characteristic,
    }
}