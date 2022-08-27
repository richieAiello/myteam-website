import BuildFeature from './BuildFeature';
import person from '../../../assets/icons/icon-person.svg';
import cog from '../../../assets/icons/icon-cog.svg';
import chart from '../../../assets/icons/icon-chart.svg';
import pattern from '../../../assets/bg-patterns/bg-pattern-home-3.svg';

const Build = props => {
  return (
    <div className="bg-state-green py-16 md:py-[6.25rem] lg:py-[8.75rem]">
      <section className="container--secondary relative z-0 lg:grid lg:grid-cols-2">
        <div className="before:bg-coral before:w-[3.125rem] before:h-1 before:block">
          <h2 className="heading max-w-[15rem] mt-8 mb-14 md:max-w-[445px] md:mb-16 lg:mt-[3.375rem]">
            Build & manage distributed teams like no one else.
          </h2>
        </div>
        {/*wrapper containing BuildFeature components */}
        <div className="grid gap-y-12 md:gap-y-8 lg:w-[540px] lg:mt-[3.625rem] lg:justify-self-end">
          <BuildFeature
            image={person}
            heading="Experienced Individuals"
            text="Our network is made up of highly experienced professionals who are 
            passionate about what they do."
          />
          <BuildFeature
            image={cog}
            heading="Easy to Implement"
            text="Our processes have been refined over years of implementation meaning 
            our teams always deliver."
          />
          <BuildFeature
            image={chart}
            heading="Enhanced Productivity"
            text="Our customized platform with in-built analytics helps you manage your 
            distributed teams."
          />
        </div>
        <img
          src={pattern}
          alt=""
          className="absolute -top-16 -right-[7.75rem] -z-10 md:-top-[6.25rem] md:-right-[12.375rem]
          lg:-bottom-[8.75rem] lg:top-[unset] lg:-right-[16.5625rem]"
          loading="lazy"
        />
      </section>
    </div>
  );
};

export default Build;
