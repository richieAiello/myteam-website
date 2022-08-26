import HeroAbout from '../components/about/hero-section/HeroAbout';
import Directors from '../components/about/directors-section/Directors';
import Clients from '../components/about/clients-section/Clients';
import Ready from '../components/shared-components/Ready';

const About = props => {
  return (
    <main>
      <HeroAbout />
      <Directors />
      <Clients />
      <Ready />
    </main>
  );
};

export default About;
