import 'regenerator-runtime/runtime'
import { GetPokemonUseCase } from '../../../src/Domain/UseCase/Pokemon/GetPokemon';

const mockPokemonRepository = {
    getPokemon: jest.fn(),
};


describe('GetPokemonsUseCase', () => {
    let getPokemonUseCase;

    beforeEach(() => {
        getPokemonUseCase = GetPokemonUseCase({ PokemonRepository: mockPokemonRepository });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return expected result', async () => {
        // Arrange
        const pokemonId = '1';

        // Mock 
        mockPokemonRepository.getPokemon.mockResolvedValue({ result: {id: "1", "name": 1, image: "www.image.es", "abilities": []}, error: null });

        // Act
        const { result, error } = await getPokemonUseCase.execute(pokemonId)

        // Assert
        expect(mockPokemonRepository.getPokemon).toHaveBeenCalledWith(pokemonId);
        expect(result).toEqual({id: "1", "name": 1, image: "www.image.es", "abilities": []});
    });
  
});
