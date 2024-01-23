# Prueba técnica - TVUP 

La prueba técnica consistirá en desarrollar una aplicación web con dos vistas: una
página principal que mostrará una lista de Pokémon y una página de detalle para
cada Pokémon específico. Utilizaremos el endpoint de la API web de Pokémon
( https://pokeapi.co/ ) para obtener la información necesaria.

## Descripción del problema

### Página Principal:
1. La página principal debe mostrar una lista de Pokémon de máximo 10
elementos. Cada elemento de la lista debe incluir al menos el nombre y el
número del Pokémon.
2. Al hacer clic en un Pokémon de la lista, el usuario deberá ser redirigido a la
página de detalle correspondiente.

### Página de Detalle:
1. La página de detalle debe mostrar información más detallada sobre el
Pokémon seleccionado:
- Nombre: name
- Imagen: sprintes.other.home.front_default
- Listado de habilidades: abilities[:].ability.name
2. Posiciona nombre y listado a la izquierda y la imagen a la derecha.
3. Proporciona una manera de regresar a la página principal desde la página de
detalle.


El orden de archivos y carpetas es el siguiente: 
```
├─ Data
│   ├─ DataSource
│   │   └─ PokemonDataSource.ts
│   └─ Repository
│       └─ PokemonRepository.ts
├─ Domain
│   └─ UseCase
│       └─ Pokemon
│           ├─ GetPokemon.ts
│           └─ GetPokemons.ts
├─ Assets
│
├─ Interfaces
│        └─ PokemonInterfaces.ts
├─ index.js
│
├─ StylesVariables
│       ├─ Colors.scss
│       ├─ Fonts.scss
│       ├─ Mixins.scss
│       └─ Sizes.scss
│
└─ Presentation
    └─ View
        └─ Pokemon
        │     ├─ List
        │     │   ├─ PokemonList.scss 
        │     │   ├─ PokemonList.tsx
        │     │   └─ ViewModel.ts
        │     ├─ Detail
        │     │   ├─ PokemonDetail.scss 
        │     │   ├─ PokemonDetail.tsx 
        │     │   └─ ViewModel.ts
        │     │
        Components
            ├─ ButtonBack  
            │    ├─ ButtonBack.scss
            │    └─ ButtonBack.tsx
            ├─ ImagePokemon  
            │    ├─ ImagePokemon.scss
            │    └─ ImagePokemon.tsx
            ├─ List  
            │    ├─ List.scss
            │    └─ List.tsx
            ├─ NavBar  
            │    ├─ NavBar.scss
            │    └─ NavBar.tsx
            └─ TitleWithImage  
                 ├─ TitleWithImage.scss
                 └─ TitleWithImage.tsx


``` 