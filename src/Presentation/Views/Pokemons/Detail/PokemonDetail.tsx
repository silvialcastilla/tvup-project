import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import DI from '../../../../DI/ioc'

export const PokemonDetail = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  const { name, getPokemon, image, abilities } = DI.resolve("PokemonDetailViewModel")

  useEffect(() => {
    getPokemon(id)
  }, [])

  return (
    <div className="page">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: 10 }}>
        <button onClick={() => {
          navigate(-1)
        }}>BACK</button>
      </div>
      <div style={{ display: "flex", flexDirection: "row", padding: 30 }}>
        <div style={{display: "flex", flexDirection: "column"}}>
          <p>{name}</p>
          <ul>
            {abilities.map((abilityPokemon: { ability: { name: string } }) => <li>{abilityPokemon.ability.name}</li>)}
          </ul>
        </div>
        <div>
          <img src={image} sizes='40px' />
        </div>
      </div>
    </div>
  );
}
