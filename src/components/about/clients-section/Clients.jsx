import pattern from '../../../assets/bg-patterns/bg-pattern-about-4.svg';

const Clients = props => {
  return (
    <div className="bg-state-green overflow-hidden py-[5.5rem] md:py-[6.25rem]">
      <section className="container relative z-0">
        <img
          src={pattern}
          alt=""
          className="absolute -z-10 -top-[11.75rem] -left-[7.75rem] md:-top-[12.5rem] md:-left-10"
          loading="lazy"
        />
        <h2 className="heading mb-16 text-center md:mb-12">
          Some of our clients
        </h2>
        <div className="grid gap-y-16 md:flex md:items-center md:justify-between">
          <img
            src="./images/logo-the-verge.png"
            alt=""
            className="mx-auto w-[146.56px] md:w-[103px]"
            loading="lazy"
          />
          <img
            src="./images/logo-jakarta-post.png"
            alt=""
            className="mx-auto w-[162.21px] md:w-[114px]"
            loading="lazy"
          />
          <img
            src="./images/logo-the-guardian.png"
            alt=""
            className="mx-auto w-[159.37px] md:w-[112px]"
            loading="lazy"
          />
          <img
            src="./images/logo-tech-radar.png"
            alt=""
            className="mx-auto w-[146.56px] md:w-[103px]"
            loading="lazy"
          />
          <img
            src="./images/logo-gadgets-now.png"
            alt=""
            className="mx-auto w-[86.8px] md:w-[61px]"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};

export default Clients;
