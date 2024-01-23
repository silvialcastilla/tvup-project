import 'regenerator-runtime/runtime'
import { renderHook, act } from '@testing-library/react-hooks';
import PokemonListViewModel from '../../../../../src/Presentation/Views/Pokemons/List/ViewModel';

const mockGetPokemonsUseCase = {
    execute: jest.fn()
};

describe('PokemonListViewModel', () => {
    let vm;
    beforeEach(() => {
        vm = renderHook(() => PokemonListViewModel({
            GetPokemonsUseCase: mockGetPokemonsUseCase,
        }));
    });

    afterEach(() => {
        jest.clearAllMocks();
    })

    it('should initialize with empty values and no error', () => {

        const { result } = vm;

        expect(result.current).toBe([]);
    })
});

describe('getPokemons', () => {

    it('should call GetPokemonsUseCase and update state values on getPokemons', async () => {
        const { result } = vm;
        //Arrange
        const expectedData = [{name: "as", id: "1"}]
        //Mock
        mockGetProductUseCase.execute.mockResolvedValue({ result: expectedData, error: null });

        //Act
        await act(async () => await result.current.getPokemons(pokemonId));

        //Assert
        expect(mockGetProductUseCase.execute).toHaveBeenCalledWith();
        expect(result.current.error).toBe('');
        expect(result.current.id).toBe(expectedData.id);
        expect(result.current.name).toBe(expectedData.name);
    });
})