import Story from './Story';
import storyData from './storyData';
import patternTop from '../../../assets/bg-patterns/bg-pattern-home-4-about-3.svg';
import patternBottom from '../../../assets/bg-patterns/bg-pattern-home-5.svg';

const Stories = props => {
  const data = storyData;

  return (
    <div className="bg-jungle-green pt-[8.75rem] pb-[10.25rem] md:py-[6.25rem]">
      <section className="container--secondary relative z-0 text-center">
        <h2 className="heading max-w-[327px] mx-auto mb-12 md:max-w-full">
          Delivering real results for top companies. Some of our
          <span className="text-rapture-blue"> success stories.</span>
        </h2>
        <div className="grid gap-y-12">
          {data.map(item => {
            return (
              <Story
                key={item.name}
                quote={item.quote}
                name={item.name}
                position={item.position}
                image={item.image}
              />
            );
          })}
        </div>
        <img
          src={patternTop}
          alt=""
          className="absolute -z-10 -top-[8.75rem] -left-6 md:-top-[6.25rem] md:-left-[6.125rem]"
          loading="lazy"
        />
        <img
          src={patternBottom}
          alt=""
          className="absolute -z-10 -bottom-[10.25rem] -right-6 md:-bottom-[6.25rem] md:-right-[6.125rem]"
          loading="lazy"
        />
      </section>
    </div>
  );
};

export default Stories;
