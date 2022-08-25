const HomeHero = props => {
  return (
    <div
      className="bg-midnight-green pt-40 pb-[12.3125rem] bg-[url(./assets/bg-patterns/home-hero.svg)]
      bg-no-repeat bg-bottom"
    >
      <section className="container text-center">
        <h1 className="heading--hero mb-[1.125rem]">
          Find the best <span className="text-coral">talent</span>
        </h1>
        <p className="leading-7">
          Finding the right people and building high performing teams
          can be hard. Most companies aren’t tapping into the
          abundance of global talent. We’re about to change that.
        </p>
      </section>
    </div>
  );
};

export default HomeHero;
