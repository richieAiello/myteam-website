import BuildFeature from './BuildFeature';
import person from '../../../assets/icons/icon-person.svg';
import cog from '../../../assets/icons/icon-cog.svg';
import chart from '../../../assets/icons/icon-chart.svg';
import pattern from '../../../assets/bg-patterns/bg-pattern-home-3.svg';

const Build = props => {
  return (
    <div className="bg-state-green py-16">
      <section className="container relative z-0 before:bg-coral before:w-[3.125rem] before:h-1 before:block">
        <h2 className="heading max-w-[15rem] mt-8 mb-14">
          Build & manage distributed teams like no one else.
        </h2>
        {/*wrapper containing BuildFeature components */}
        <div className="grid gap-y-12">
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
          className="absolute -top-16 -right-[7.75rem] -z-10"
        />
      </section>
    </div>
  );
};

export default Build;
