const BuildFeature = ({ image, heading, text }) => {
  return (
    <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-start">
      <img src={image} alt="" className="mb-4 md:mb-0 md:mr-6" />
      <div>
        <h3 className="mb-2 heading--sub text-coral md:mb-4">
          {heading}
        </h3>
        <p className="max-w-[327px] opacity-80 md:max-w-full">
          {text}
        </p>
      </div>
    </div>
  );
};

export default BuildFeature;
