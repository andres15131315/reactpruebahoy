import './Section.css';
import appleimg from '../../assets/apple.png';
import lemonimg from '../../assets/lemon.png';
import pinaimg from '../../assets/pina.png';

const frutas = [
  {
    id: '1',
    name: 'Manzana',
    description: 'Fruta roja y dulce, rica en fibra y vitamina C.',
    img: appleimg,
  },
  {
    id: '2',
    name: 'Limón',
    description: 'Fruta cítrica amarilla, ácida y refrescante.',
    img: lemonimg,
  },
  {
    id: '3',
    name: 'Piña',
    description: 'Fruta tropical amarilla, jugosa y dulce, rica en bromelina.',
    img: pinaimg,
  },
];

const handleClick = (name) => {
  alert(`Has elegido contactar a: ${name}`);
};

export default function Section() {
  return (
    <section>
      {frutas.map(({id,name,description,img}) => (
        <div className="card" key={id}>
          <img className="image" src={img} alt={name} />
          <h2 className="name">{name}</h2>
          <p className="description">{description}</p>
          <button id={id} onClick={() => handleClick(name)}>Contactarle</button>
        </div>
      ))}
    </section>
  );
}   
