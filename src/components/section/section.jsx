import { useEffect, useState } from 'react';
import UserCard from '../UserCard/UserCard';
import appleimg from '../../assets/apple.png';
import lemonimg from '../../assets/lemon.png';
import pinaimg from '../../assets/pina.png';
import './Section.css';

const frutas = [
  {
    id: '1',
    name: 'Manzana',
    description: 'Fruta roja y dulce, rica en fibra y vitamina C.',
    img: appleimg,
    phone: '300-111-2233'
  },
  {
    id: '2',
    name: 'Limón',
    description: 'Fruta cítrica amarilla, ácida y refrescante.',
    img: lemonimg,
    phone: '300-111-2234'
  },
  {
    id: '3',
    name: 'Piña',
    description: 'Fruta tropical amarilla, jugosa y dulce, rica en bromelina.',
    img: pinaimg,
    phone: '300-111-2223'
  },
];

export default function Section() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    fetch('https://dummyjson.com/users/filter?key=hair.color&value=Brown')
      .then(res => res.json())
      .then(data => {
        setUsers(data.users);
      });
  }, [count]);

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={handleClick}>Cargar usuarios</button>

      {/* Sección de frutas */}
      <section className="fruta-section">
        <h1 className="fruta-titulo">Total de frutas: {frutas.length}</h1>
        <div className="card-container">
          {frutas.map((fruta) => (
            <UserCard key={fruta.id} user={fruta} />
          ))}
        </div>
      </section>

      {/* Sección de usuarios */}
      <section className="usuarios-section">
        <h1 className="fruta-titulo">Usuarios : {users.length}</h1>
        <div className="card-container">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <img src={user.image} alt={user.firstName} className="user-img" />
              <h3>{user.firstName} {user.lastName}</h3>
              <p>Email: {user.email}</p>
              <p>Edad: {user.age}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
