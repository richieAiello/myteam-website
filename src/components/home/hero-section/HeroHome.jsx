import patternMobile from '../../../assets/bg-patterns/home-hero.svg';

const HeroHome = props => {
  return (
    <div className="bg-midnight-green pt-40 md:pt-56">
      <section className="container flex flex-col items-center text-center relative pb-[12.3125rem] md:pb-64">
        <h1 className="heading--hero mb-[1.125rem] md:max-w-[10ch] md:mb-6">
          Find the best <span className="text-coral">talent</span>
        </h1>
        <p className="leading-7 md:max-w-[457px]">
          Finding the right people and building high performing teams
          can be hard. Most companies aren’t tapping into the
          abundance of global talent. We’re about to change that.
        </p>
        <img
          src={patternMobile}
          alt=""
          className="absolute bottom-0 right-0 left-0 mx-auto"
        />
      </section>
    </div>
  );
};

export default HeroHome;
