import backArrow from '../../../Assets/back-arrow.png'

import './ButtonBack.scss'

export default function ButtonBack({ onClick }: { onClick: () => void }) {
    return (
        <div>
            <button
                className='buttonback'
                onClick={() => {
                    onClick();
                }}>
                <div className='buttonback-container'>
                    <img
                        alt="button back"
                        src={backArrow}
                    />
                    <p>Buscar otro Pokemon</p>
                </div>
            </button>
        </div>
    );
}

