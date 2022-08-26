import HeroAbout from '../components/about/hero-section/HeroAbout';
import Clients from '../components/about/clients-section/Clients';
import Ready from '../components/shared-components/Ready';

const About = props => {
  return (
    <main>
      <HeroAbout />
      <Clients />
      <Ready />
    </main>
  );
};

export default About;
