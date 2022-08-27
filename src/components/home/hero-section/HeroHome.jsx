import patternMobile from '../../../assets/bg-patterns/home-hero.svg';
import patternTop from '../../../assets/bg-patterns/home-hero-desktop.svg';

const HeroHome = props => {
  return (
    <div className="bg-midnight-green pt-40 md:pt-56 lg:pt-[15.625rem]">
      <section
        className="container--secondary flex flex-col items-center text-center relative pb-[12.3125rem]
        md:pb-64 lg:pb-[15.625rem] lg:flex-row lg:justify-between"
      >
        <h1 className="heading--hero mb-[1.125rem] md:max-w-[10ch] md:mb-6 lg:text-left lg:mb-0">
          Find the best <span className="text-coral">talent</span>
        </h1>
        <div
          className="before:hidden before:h-1 before:w-[3.125rem] before:bg-rapture-blue before:mb-20 
          lg:before:block"
        >
          <p className="leading-7 md:max-w-[457px] lg:text-left lg:w-[445px] lg:text-lg">
            Finding the right people and building high performing
            teams can be hard. Most companies aren’t tapping into the
            abundance of global talent. We’re about to change that.
          </p>
        </div>
        <img
          src={patternMobile}
          alt=""
          className="absolute bottom-0 right-0 left-0 mx-auto lg:left-[unset]"
          loading="lazy"
        />
        <img
          src={patternTop}
          alt=""
          className="hidden absolute top-0 -left-[16.5625rem] lg:block"
          loading="lazy"
        />
      </section>
    </div>
  );
};

export default HeroHome;
