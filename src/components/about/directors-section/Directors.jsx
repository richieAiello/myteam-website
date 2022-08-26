import DirectorsGrid from './DirectorsGrid';
import patternTop from '../../../assets/bg-patterns/bg-pattern-about-2-contact-1.svg';
import patternBottom from '../../../assets/bg-patterns/bg-pattern-home-4-about-3.svg';

const Directors = props => {
  return (
    <div className="bg-jungle-green pt-[5.5rem] pb-[7.25rem] overflow-hidden">
      <section className="container relative z-0 text-center">
        <h2 className="heading mb-12">Meet the directors</h2>
        <DirectorsGrid />
        <img
          src={patternTop}
          alt=""
          className="absolute -z-10 -top-[11.75rem] -left-[7.75rem]"
        />
        <img
          src={patternBottom}
          alt=""
          className="absolute -z-10 -bottom-[7.25rem] -right-6"
        />
      </section>
    </div>
  );
};

export default Directors;
