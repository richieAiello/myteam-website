import pattern from '../../../assets/bg-patterns/nav.svg';

const HeroAbout = props => {
  return (
    <div className="bg-midnight-green pt-40 overflow-hidden">
      <section className="container text-center relative z-0 pb-[6.75rem]">
        <h1 className="heading--hero--secondary mb-4">About</h1>
        <p className="leading-7">
          We help companies build dynamic teams made up of top global
          talent. Using our network of passionate professionals we
          drive innovation and deliver incredible outcomes. Talented,
          diverse teams shape the best products and experiences. We’ll
          bring those teams to you.
        </p>
        <img
          src={pattern}
          alt=""
          className="absolute -z-10 -bottom-[6.25rem] -right-[7.75rem]"
        />
      </section>
    </div>
  );
};

export default HeroAbout;
