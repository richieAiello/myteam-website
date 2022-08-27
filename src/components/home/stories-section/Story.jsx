const Story = ({ quote, name, position, image }) => {
  return (
    <div className="pt-[2.25rem] bg-[url(./assets/icons/icon-quotes.svg)] bg-top bg-no-repeat">
      <p className="mb-4">{quote}</p>
      <h4 className="heading--sub mb-[0.125rem] text-rapture-blue">
        {name}
      </h4>
      <p className="text-[0.8125rem] leading-[1.125rem] italic font-medium mb-4">
        {position}
      </p>
      <img
        src={image}
        alt=""
        className="h-16 w-16 rounded-full border-2 border-[#C4FFFE] border-solid mx-auto"
      />
    </div>
  );
};

export default Story;
