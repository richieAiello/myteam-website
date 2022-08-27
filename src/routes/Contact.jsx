import HeroContact from '../components/contact/hero-section/HeroContact';
import ContactForm from '../components/contact/form-section/ContactForm';
import patternTop from '../assets/bg-patterns/bg-pattern-about-2-contact-1.svg';
import patternBottom from '../assets/bg-patterns/bg-pattern-contact-2.svg';

const Contact = props => {
  return (
    <main className="bg-midnight-green pt-40 pb-[5.5rem] overflow-hidden md:pt-56 md:pb-28">
      <div className="container--secondary relative z-0 grid gap-y-14 md:gap-y-16">
        <HeroContact />
        <ContactForm />
        <img
          src={patternTop}
          alt=""
          className="hidden absolute -z-10 md:block md:-left-[12.375rem] md:top-0"
          loading="lazy"
        />
        <img
          src={patternBottom}
          alt=""
          className="absolute -z-10 -right-[7.75rem] -bottom-[12.5rem] md:-bottom-28"
          loading="lazy"
        />
      </div>
    </main>
  );
};

export default Contact;
