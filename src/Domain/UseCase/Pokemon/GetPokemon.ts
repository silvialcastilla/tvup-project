/**
 * 
 * @param {{PokemonRepository: {getPokemon: (id) => {result:any, error: Error?}}}} param 
 * @returns {{execute: () => Promise<{result: any, error: Error?}>}}
 */
export function GetPokemonUseCase({ PokemonRepository }:  {PokemonRepository: any}) {
    return {
        async execute(id: string) {
            const { result, error } = await PokemonRepository.getPokemon(id)
            return { result, error }
        }
    }
}