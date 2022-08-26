import person from '../../../assets/icons/icon-person.svg';
import cog from '../../../assets/icons/icon-cog.svg';
import chart from '../../../assets/icons/icon-chart.svg';

const HeroContact = props => {
  return (
    <section className="">
      <h1 className="heading--hero--secondary text-center mb-4">
        Contact
      </h1>
      <h2 className="text-coral text-[2rem] leading-[3rem] text-center font-bold mb-10">
        Ask us about
      </h2>
      <div className="grid gap-y-6">
        <div className="flex items-center justify-start">
          <img src={person} alt="" className="mr-6" />
          <p className="heading--sub max-w-[22ch]">
            The quality of our talent network
          </p>
        </div>
        <div className="flex items-center">
          <img src={cog} alt="" className="mr-6" />
          <p className="heading--sub max-w-[22ch]">
            Usage & implementation of our software
          </p>
        </div>
        <div className="flex items-center">
          <img src={chart} alt="" className="mr-6" />
          <p className="heading--sub max-w-[22ch]">
            How we help drive innovation
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroContact;
