import DirectorsGrid from './DirectorsGrid';

const Directors = props => {
  return (
    <div className="bg-jungle-green py-[5.5rem] overflow-hidden">
      <section className="container relative z-0 text-center">
        <h2 className="heading mb-12">Meet the directors</h2>
        <DirectorsGrid />
      </section>
    </div>
  );
};

export default Directors;
