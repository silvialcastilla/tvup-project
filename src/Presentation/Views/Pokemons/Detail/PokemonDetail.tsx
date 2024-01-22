import { useEffect } from 'react';
import { NavBar } from '../../../components/NavBar/NavBar';
import { useNavigate, useParams } from 'react-router-dom';
import ButtonBack from '../../../components/ButtonBack/ButtonBack';
import DI from '../../../../DI/ioc'
import ImagePokemon from '../../../components/ImagePokemon/ImagePokemon';

import './DetailPage.scss'

export const PokemonDetail = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  const { name, getPokemon, image, abilities } = DI.resolve("PokemonDetailViewModel")

  useEffect(() => {
     getPokemon(id)
  }, [])

  return (
    <div className="detailpage">
      <NavBar />
      <ButtonBack onClick={() => navigate(-1)} />
      <div className="detailpage-details">
        <div className="detailpage-details-info">
          <h3 className="detailpage-details-info-h3">¿Cuál es su nombre?</h3>
          <p className="detailpage-details-info-p">{"- " + name.toUpperCase()}</p>
          <h3 className="detailpage-details-info-h3">¿Y sus habilidades?</h3>
          <ul className="detailpage-details-info-ul">
            {
              abilities.map( (abilityPokemon: { ability: { name: string } }, i: string) => 
                        <li key={i} className="detailpage-details-info-ul-li">
                          {
                            abilityPokemon.ability.name.replace(/\b\w/g, l => l.toUpperCase())
                          }
                        </li>
              )
            }
          </ul>
        </div>
        <div className="detailpage-details-img">
          <ImagePokemon urlImage={image} />
        </div>
      </div>
    </div>
  );
}
