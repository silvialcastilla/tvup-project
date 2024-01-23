import './ImagePokemon.scss'

export default function ImagePokemon({urlImage} : {urlImage? : string}) {
    
    return (
        <div className='imagepokemon'>
            <img alt="img pokemon" className='imagepokemon-img' src={urlImage}  />            
        </div>
    );
}


