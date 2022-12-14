import person from '../../../assets/icons/icon-person.svg';
import cog from '../../../assets/icons/icon-cog.svg';
import chart from '../../../assets/icons/icon-chart.svg';

const HeroContact = props => {
  return (
    <section className="">
      <h1 className="heading--hero--secondary text-center mb-4 md:mb-6 lg:text-left lg:mb-4">
        Contact
      </h1>
      <h2 className="text-coral text-[2rem] leading-[3rem] text-center font-bold mb-10 md:mb-6 lg:text-left lg:mb-8">
        Ask us about
      </h2>
      <div className="grid gap-y-6 md:gap-y-2 md:max-w-[475px] md:mx-auto lg:mx-0">
        <div className="flex items-center justify-start">
          <img src={person} alt="" className="mr-6" />
          <p className="heading--sub max-w-[22ch] md:max-w-full">
            The quality of our talent network
          </p>
        </div>
        <div className="flex items-center">
          <img src={cog} alt="" className="mr-6" />
          <p className="heading--sub max-w-[22ch] md:max-w-full">
            Usage & implementation of our software
          </p>
        </div>
        <div className="flex items-center">
          <img src={chart} alt="" className="mr-6" />
          <p className="heading--sub max-w-[22ch] md:max-w-full">
            How we help drive innovation
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroContact;
