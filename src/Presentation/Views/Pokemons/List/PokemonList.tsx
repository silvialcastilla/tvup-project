import { NavBar } from '../../../components/NavBar/NavBar';
import { TitleWithImage } from '../../../components/TitleWithImage/TitleWithImage';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import DI from '../../../../DI/ioc';
import List from '../../../components/List/List';


export const PokemonList = () => {

    let navigate = useNavigate();
    const { pokemons, getPokemons } = DI.resolve("PokemonListViewModel")

    useEffect(() => {
        getPokemons();
    }, []);


    return (
        <div className='main-page'>
            <NavBar />
            <TitleWithImage />
            <List
                data={pokemons}
                onRowClick={(id: string) => navigate(`/detail/${id}`)}
            />
        </div>
    )
}

