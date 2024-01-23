import { PokemonRepository } from '../../../src/Data/Repository/PokemonRepository';
import 'regenerator-runtime/runtime'

const mockPokemonDataSource = {
    getPokemons: jest.fn(),
    getPokemon: jest.fn(),
};

describe('PokemonRepository', () => {
    let pokemonRepository;

    beforeEach(() => {
        // Create a new instance of ProductRepository with the mock ProductDataSource
        pokemonRepository = PokemonRepository({ PokemonDataSource: mockPokemonDataSource });
    });

    afterEach(() => {
        // Reset mock after each test
        jest.clearAllMocks();
    });

    describe('getPokemons', () => {
        it('should return the result', async () => {

            const expectedResult = { result: [], error: null };
            mockPokemonDataSource.getPokemons.mockReturnValue(expectedResult);

            const result = await pokemonRepository.getPokemons();
            // Validate if the call is calling the other function
            expect(mockPokemonDataSource.getPokemons).toHaveBeenCalled();
            expect(result).toEqual(expectedResult);
        })

        it('should handle error if the call has error', async () => {

            const expectedError = new Error('Error to get the data');
            const expectedResult = { result: null, error: expectedError };
            mockPokemonDataSource.getPokemons.mockResolvedValue(expectedResult);

            const resultData = await pokemonRepository.getPokemons();
            // Assert
            expect(mockPokemonDataSource.getPokemons).toHaveBeenCalled();
            expect(resultData).toEqual({ result: null, error: expectedError });
        })

    })

    describe('getPokemon', () => {
        it('we should get the result by id and return that result', async () => {

            const expectedResult = { result: [], error: null };
            mockPokemonDataSource.getPokemon.mockReturnValue(expectedResult);

            const result = await pokemonRepository.getPokemon();
            // Validate if the call is calling the other function
            expect(mockPokemonDataSource.getPokemon).toHaveBeenCalled();
            expect(result).toEqual(expectedResult);
        })

        it('should handle error if the call has error', async () => {

            const expectedError = new Error('Error to get the data');
            const expectedResult = { result: null, error: expectedError };
            mockPokemonDataSource.getPokemon.mockReturnValue(expectedResult);

            const resultData = await pokemonRepository.getPokemon();
            // Assert
            expect(mockPokemonDataSource.getPokemon).toHaveBeenCalled();
            expect(resultData).toEqual({ result: null, error: expectedError });
        })

    })

})