export function PokemonRepository({ PokemonDataSource }: { PokemonDataSource: any }) {
    return {

        async getPokemons() {
        
            const { result, error } = await PokemonDataSource.getPokemons()
            return { result, error };
        },

        async getPokemon(id: string) {
        
            const { result, error } = await PokemonDataSource.getPokemon(id)
            return { result, error };
        },

    }
}
