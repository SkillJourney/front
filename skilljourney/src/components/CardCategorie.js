import React from 'react';

const CardCategorie = ({ img, name, number }) => {
    return (
        <div className='containers_card'>
            <img src={img} alt='icon' />
            <p>{name}</p>
            <p className='border_number'>{number}</p>
        </div>
    );
};

export default CardCategorie;