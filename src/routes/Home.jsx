import HeroHome from '../components/home/hero-section/HeroHome';
import Build from '../components/home/build-section/Build';
import Stories from '../components/home/stories-section/Stories';
import Ready from '../components/shared-components/Ready';

const Home = props => {
  return (
    <main>
      <HeroHome />
      <Build />
      <Stories />
      <Ready />
    </main>
  );
};

export default Home;
