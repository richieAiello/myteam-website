import HeroContact from '../components/contact/hero-section/HeroContact';
import ContactForm from '../components/contact/form-section/ContactForm';

const Contact = props => {
  return (
    <main className="bg-midnight-green pt-40 pb-[5.5rem]">
      <div className="container grid gap-y-14">
        <HeroContact />
        <ContactForm />
      </div>
    </main>
  );
};

export default Contact;
