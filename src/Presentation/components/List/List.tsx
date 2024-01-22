import { Pokemon } from '../../../Interfaces/PokemonInterfaces';
import './List.scss'

export default function List({ data = [], onRowClick }: { data: Pokemon[], onRowClick: (a: string) => void }) {
    return (
        <div className='list'>
            {data.map((item, i) => {
                return (
                    <div key={i}
                        className='list-items'
                        onClick={() => onRowClick(item.id!)}
                    >
                        <h4 className='list-items-h4'>{item.id}</h4>
                        <p className='list-items-p'>{item.name?.toLocaleUpperCase()}</p>
                    </div>
                )
            })}
        </div>
    );
}

