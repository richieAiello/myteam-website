import pattern from '../../../assets/bg-patterns/nav.svg';

const HeroAbout = props => {
  return (
    <div className="bg-midnight-green pt-40 overflow-hidden md:pt-56">
      <section className="container--secondary text-center relative z-0 pb-[6.75rem] md:pb-28">
        <h1 className="heading--hero--secondary mb-4 md:mb-6">
          About
        </h1>
        <p className="leading-7 max-w-[457px] mx-auto">
          We help companies build dynamic teams made up of top global
          talent. Using our network of passionate professionals we
          drive innovation and deliver incredible outcomes. Talented,
          diverse teams shape the best products and experiences. We’ll
          bring those teams to you.
        </p>
        <img
          src={pattern}
          alt=""
          className="absolute -z-10 -bottom-[6.25rem] -right-[7.75rem] md:bottom-0 md:-right-[12.375rem]"
          loading="lazy"
        />
      </section>
    </div>
  );
};

export default HeroAbout;
