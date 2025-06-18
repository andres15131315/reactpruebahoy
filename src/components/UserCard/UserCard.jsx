import { useState } from 'react';
import './UserCard.css';

export const UserCard = ({ user }) => {
  const [isContacted, setIsContacted] = useState(false);
  const { id, name, description, img, phone } = user; 

  const handleClick = () => {
    setIsContacted(true);
    console.log(`Tarjeta de ${name} fue renderizada`);
  };

  return (
    <div className="card">
      <img className="image" src={img} alt={name} />
      <h2 className="name">{name}</h2>
      <p className="description">{description}</p>
      
      <button id={id} onClick={handleClick} disabled={isContacted}>
        {isContacted ? 'Contactado ' : 'Contactar'}
      </button>

      {isContacted && (
        <p className="phone">Telefono: {phone}</p>
      )}
    </div>
  );
};

export default UserCard;
