import Nav from './Nav';
import '../../styles/nav.css';

const Header = props => {
  return (
    <header className="w-screen h-20 pb-4 fixed top-0 left-0 bg-midnight-green flex items-end">
      <Nav />
    </header>
  );
};

export default Header;
