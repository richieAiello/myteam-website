import DirectorsGrid from './DirectorsGrid';
import patternTop from '../../../assets/bg-patterns/bg-pattern-about-2-contact-1.svg';
import patternBottom from '../../../assets/bg-patterns/bg-pattern-home-4-about-3.svg';

const Directors = props => {
  return (
    <div
      className="bg-jungle-green pt-[5.5rem] pb-[7.25rem] overflow-hidden md:pt-[6.25rem] md:pb-32
      lg:pt-[8.75rem] lg:pb-[10.5rem]"
    >
      <section className="container--secondary relative z-0 text-center">
        <h2 className="heading mb-12 lg:mb-16">Meet the directors</h2>
        <DirectorsGrid />
        <img
          src={patternTop}
          alt=""
          className="absolute -z-10 -top-[11.75rem] -left-[7.75rem] md:-top-[6.25rem] md:-left-[12.375rem]
          lg:-top-[8.75rem] lg:-left-[16.5rem]"
          loading="lazy"
        />
        <img
          src={patternBottom}
          alt=""
          className="absolute -z-10 -bottom-[7.25rem] -right-6 md:-bottom-32 md:-right-[6.125rem]
          lg:-bottom-[10.5rem] lg:-right-[10.25rem]"
          loading="lazy"
        />
      </section>
    </div>
  );
};

export default Directors;
