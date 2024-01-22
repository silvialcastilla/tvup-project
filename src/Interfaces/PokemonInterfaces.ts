
export interface Pokemon {
    name?: string;
    id?: string;
}

export interface PokemonDetail extends Pokemon {
    abilities?: string[];
    image?: string;
}

export interface PokemonResponse extends Pokemon {
    url: string;
    name: string;
}