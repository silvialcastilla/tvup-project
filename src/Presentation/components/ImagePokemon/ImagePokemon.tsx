import './ImagePokemon.scss'

export default function ImagePokemon({urlImage} : {urlImage? : string}) {
    
    return (
        <div className='imagepokemon'>
            {urlImage === "" ? <p>Cargando...</p> : <img alt="img pokemon" className='imagepokemon-img' src={urlImage}  />}            
        </div>
    );
}


