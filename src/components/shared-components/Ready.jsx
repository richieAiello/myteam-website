import ContactBtn from './ContactBtn';
import pattern from '../../assets/bg-patterns/bg-pattern-home-6-about-5.svg';

const Ready = props => {
  return (
    <div className="bg-coral py-[5.25rem] overflow-hidden md:py-[4.75rem]">
      <section
        className="container--secondary relative z-0 text-center flex flex-col items-center
        md:flex-row md:justify-between lg:max-w-[917px]"
      >
        <h2 className="heading mb-6 text-state-green max-w-[12ch] md:mb-0 md:max-w-full">
          Ready to get started?
        </h2>
        <ContactBtn dark />
        <img
          src={pattern}
          alt=""
          className="absolute -z-10 -left-6 -bottom-[6.5625rem] md:top-0 md:-left-[6.125rem]
          lg:-left-[16.5rem] lg:-bottom-[4.75rem] lg:top-[unset]"
          loading="lazy"
        />
      </section>
    </div>
  );
};

export default Ready;
