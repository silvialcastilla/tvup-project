import 'regenerator-runtime/runtime'
import { renderHook, act } from '@testing-library/react-hooks';
import PokemonDetailViewModel from '../../../../../src/Presentation/Views/Pokemons/Detail/ViewModel';

/**
 * @jest-environment node || jsdom
 */

const mockGetPokemonUseCase = {
    execute: jest.fn()
};

describe('PokemonDetail', () => {
    let vm;
    beforeEach(() => {
        vm = renderHook(() => PokemonDetailViewModel({
            GetPokemonUseCase: mockGetPokemonUseCase,
        }));
    });

    afterEach(() => {
        jest.clearAllMocks();
    })

    it('should initialize with empty values and no error', () => {

        const { result } = vm;

        expect(result.current.id).toBeNull();
        expect(result.current.name).toBe('');
        expect(result.current.image).toBe('');
        expect(result.current.abilities).toBe([]);
    })

    describe('getPokemon', () => {

        it('should call GetPokemonUseCase and update state values on getPokemon', async () => {
            const { result } = vm;
            //Arrange
            const pokemonId = "1";
            const expectedData = {
                id: 1,
                name: 'pokemon A',
                image: 'www.images.es',
                abilities: []
            }
    
            //Mock
            mockGetProductUseCase.execute.mockResolvedValue({ result: expectedData, error: null });
    
            //Act
            await act(async () => await result.current.getPokemon(pokemonId));
    
            //Assert
            expect(mockGetProductUseCase.execute).toHaveBeenCalledWith(pokemonId);
            expect(result.current.error).toBe('');
            expect(result.current.id).toBe(expectedData.id);
            expect(result.current.name).toBe(expectedData.name);
            expect(result.current.image).toBe(expectedData.image);
            expect(result.current.abilities).toBe(expectedData.abilities);
        });
    })
});

