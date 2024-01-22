import { createContainer, asFunction, asValue } from 'awilix'
import { GetPokemonsUseCase } from '../Domain/UseCase/Pokemon/GetPokemons';
import { GetPokemonUseCase } from '../Domain/UseCase/Pokemon/GetPokemon';
import { PokemonRepository } from '../Data/Repository/PokemonRepository';
import * as PokemonDataSource from '../Data/DataSource/PokemonDataSource'
import PokemonDetailViewModel from '../Presentation/Views/Pokemons/Detail/ViewModel';
import PokemonListViewModel from '../Presentation/Views/Pokemons/List/ViewModel';

const container = createContainer();

container.register({
    PokemonRepository: asFunction(PokemonRepository),
    PokemonDataSource: asValue(PokemonDataSource),
    GetPokemonsUseCase: asFunction(GetPokemonsUseCase),
    GetPokemonUseCase: asFunction(GetPokemonUseCase),
    PokemonDetailViewModel: asFunction(PokemonDetailViewModel),
    PokemonListViewModel: asFunction(PokemonListViewModel),
})

export default container
