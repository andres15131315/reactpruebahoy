import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Section from './components/Section/Section'; 

function App() {
  return (
    <>
      <Header title="creando usando props" show={false}>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis illum odit eaque pariatur, facilis adipisci aliquam, mollitia perspiciatis deserunt, eveniet aliquid temporibus nam corrupti eos. Quaerat eveniet minima consectetur ipsa.</h2>
      </Header>

      <Section /> 

      <Footer />
    </>
  );
}

export default App;
