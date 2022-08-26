import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { ReactComponent as Facebook } from '../../assets/icons/icon-facebook.svg';
import { ReactComponent as Pinterest } from '../../assets/icons/icon-pinterest.svg';
import { ReactComponent as Twitter } from '../../assets/icons/icon-twitter.svg';

const Footer = props => {
  return (
    <footer className="bg-darkest-green py-16">
      <div className="container text-center flex flex-col items-center">
        <img src={logo} alt="" className="w-24 mb-6" />
        <ul className="grid grid-flow-col gap-x-6 mb-6">
          <li>
            <NavLink to="/" className="link">
              home
            </NavLink>
          </li>
          <li>
            <NavLink to="about" className="link">
              about
            </NavLink>
          </li>
        </ul>
        <address className="mb-10 text-center opacity-60 not-italic">
          <p>987 Hillcrest Lane</p>
          <p>Irvine, CA</p>
          <p>California 92714</p>
          <p>Call Us : 949-833-7432</p>
        </address>
        <div className="grid grid-flow-col gap-x-4 items-center mb-4">
          <a href="#" className="link">
            <Facebook className="icon" />
          </a>
          <a href="#" className="link">
            <Pinterest className="icon" />
          </a>
          <a href="#" className="link">
            <Twitter className="icon" />
          </a>
        </div>
        <p className="opacity-60">
          Copyright 2020. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
