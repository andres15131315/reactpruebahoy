import './Header.css';

const Header = ({ children, title, show }) => {
  return (
    <header className="header">
      <h1 className="title">{title}</h1>
      {children}
      {show ? <p>no aparece</p> : <p></p>}
    </header>
  );
};

export default Header;
