import { createContainer, asFunction, asValue } from 'awilix'
import PokemonListViewModel from '../Presentation/Views/Pokemons/List/ViewModel';
import DetailsViewModel from '../Presentation/Views/Pokemons/Detail/ViewModel';
import { GetPokemonsUseCase } from '../Domain/UseCase/Pokemon/GetPokemons';
import * as PokemonDataSource from '../Data/DataSource/PokemonDataSource'
import { PokemonRepository } from '../Data/Repository/PokemonRepository';
import PokemonDetailViewModel from '../Presentation/Views/Pokemons/Detail/ViewModel';
import { GetPokemonUseCase } from '../Domain/UseCase/Pokemon/GetPokemon';


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
