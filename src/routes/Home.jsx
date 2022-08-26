import HeroHome from '../components/home/hero-section/HeroHome';
import Build from '../components/home/build-section/Build';
import Stories from '../components/home/stories-section/Stories';

const Home = props => {
  return (
    <main className="">
      <HeroHome />
      <Build />
      <Stories />
    </main>
  );
};

export default Home;
