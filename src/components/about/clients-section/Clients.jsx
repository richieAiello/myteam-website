import pattern from '../../../assets/bg-patterns/bg-pattern-about-4.svg';

const Clients = props => {
  return (
    <div className="bg-state-green overflow-hidden py-[5.5rem]">
      <section className="container relative z-0">
        <img
          src={pattern}
          alt=""
          className="absolute -z-10 -top-[11.75rem] -left-[7.75rem]"
        />
        <h2 className="heading mb-16 text-center">
          Some of our clients
        </h2>
        <div className="grid gap-y-16">
          <img
            src="./images/logo-the-verge.png"
            alt=""
            className="mx-auto w-[146.56px]"
          />
          <img
            src="./images/logo-jakarta-post.png"
            alt=""
            className="mx-auto w-[162.21px]"
          />
          <img
            src="./images/logo-the-guardian.png"
            alt=""
            className="mx-auto w-[159.37px]"
          />
          <img
            src="./images/logo-tech-radar.png"
            alt=""
            className="mx-auto w-[146.56px]"
          />
          <img
            src="./images/logo-gadgets-now.png"
            alt=""
            className="mx-auto w-[86.8px]"
          />
        </div>
      </section>
    </div>
  );
};

export default Clients;
