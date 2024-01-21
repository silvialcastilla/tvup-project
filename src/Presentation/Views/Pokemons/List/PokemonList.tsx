import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../../../components/NavBar';
import DI from '../../../../DI/ioc';
import List from '../../../components/List';


export const PokemonList = () => {

    let navigate = useNavigate();
    const { pokemons, getPokemons } = DI.resolve("PokemonListViewModel")

     useEffect(() => {
         getPokemons();
     }, []);


    return (
        <>
        <NavBar/>
            <h1 style={{color: "#4fe2c1"}}>Pokemons</h1>
            <List data={pokemons} onRowClick={(id: string) => navigate(`/detail/${id}`)} />
        </>
    )
}

