const BuildFeature = ({ image, heading, text }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <img src={image} alt="" className="mb-4" />
      <h3 className="mb-2 heading--sub text-coral">{heading}</h3>
      <p className="max-w-[327px]">{text}</p>
    </div>
  );
};

export default BuildFeature;
