import 'regenerator-runtime/runtime'
import { GetPokemonsUseCase } from '../../../src/Domain/UseCase/Pokemon/GetPokemons';

const mockPokemonRepository = {
    getPokemons: jest.fn(),
};


describe('GetPokemonsUseCase', () => {
    let getPokemonsUseCase;

    beforeEach(() => {
        getPokemonsUseCase = GetPokemonsUseCase({ PokemonRepository: mockPokemonRepository });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return expected result', async () => {
        // Arrange
        const productId = '1';

        // Mock 
        mockPokemonRepository.getPokemons.mockResolvedValue({ result: [{name: "abc", id: "1"}], error: null });

        // Act
        const { result, error } = await getPokemonsUseCase.execute()

        // Assert
        expect(mockPokemonRepository.getPokemons).toHaveBeenCalledWith();
        expect(result).toEqual([{name: "abc", id: "1"}]);
    });
  
});
