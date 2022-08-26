import Nav from './Nav';

const Header = props => {
  return (
    <header className="w-screen h-20 pb-4 fixed top-0 left-0 bg-midnight-green flex items-end z-50">
      <Nav />
    </header>
  );
};

export default Header;
