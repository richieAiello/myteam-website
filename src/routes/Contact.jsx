import { useState } from 'react';
import HeroContact from '../components/contact/hero-section/HeroContact';
import ContactForm from '../components/contact/form-section/ContactForm';
import FormValidated from '../components/contact/form-section/FormValidated';
import patternTop from '../assets/bg-patterns/bg-pattern-about-2-contact-1.svg';
import patternBottom from '../assets/bg-patterns/bg-pattern-contact-2.svg';

const Contact = props => {
  const [hidden, setHidden] = useState(true);

  return (
    <>
      <main
        className="bg-midnight-green pt-40 pb-[5.5rem] overflow-hidden 
      md:pt-56 md:pb-28 lg:pt-60 lg:pb-[7.5rem]"
      >
        <div
          className="container--secondary relative z-0 grid gap-y-14 
        md:gap-y-16 lg:grid-cols-2"
        >
          <HeroContact />
          <ContactForm setState={setHidden} />
          <img
            src={patternTop}
            alt=""
            className="hidden absolute -z-10 md:block md:-left-[12.375rem] md:top-0 lg:-left-[16.5rem]"
            loading="lazy"
          />
          <img
            src={patternBottom}
            alt=""
            className="absolute -z-10 -right-[7.75rem] -bottom-[12.5rem] md:-bottom-28 
          lg:-right-[16.5rem] lg:-bottom-[7.5rem]"
            loading="lazy"
          />
        </div>
      </main>
      {!hidden && <FormValidated setState={setHidden} />}
    </>
  );
};

export default Contact;
