import React from 'react';
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
  return (
    <section className="fruta-section">
      <h1 className="fruta-titulo">Total de frutas: {frutas.length}</h1>
      <div className="card-container">
        {frutas.map((fruta) => (
          <UserCard key={fruta.id} user={fruta} />
        ))}
      </div>
    </section>
  );
}
