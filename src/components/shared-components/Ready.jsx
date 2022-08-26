import ContactBtn from './ContactBtn';
import pattern from '../../assets/bg-patterns/bg-pattern-home-6-about-5.svg';

const Ready = props => {
  return (
    <div className="bg-coral py-[5.25rem] overflow-hidden">
      <section className="container relative z-0 text-center flex flex-col items-center">
        <h2 className="heading mb-6 text-state-green max-w-[12ch]">
          Ready to get started?
        </h2>
        <ContactBtn dark />
        <img
          src={pattern}
          alt=""
          className="absolute -z-10 -left-6 -bottom-[6.5625rem]"
        />
      </section>
    </div>
  );
};

export default Ready;
