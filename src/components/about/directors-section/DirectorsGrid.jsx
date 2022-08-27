import DirectorsCard from './DirectorsCard';
import directorsData from './directorsData';

const DirectorsGrid = props => {
  const data = directorsData;

  return (
    <div className="grid gap-y-[3.25rem] md:grid-cols-2 md:gap-y-[4.75rem] md:gap-x-3">
      {data.map(item => {
        return (
          <DirectorsCard
            key={item.name}
            image={item.image}
            name={item.name}
            position={item.position}
            quote={item.quote}
            twitter={item.twitter}
            linkedin={item.linkedin}
          />
        );
      })}
    </div>
  );
};

export default DirectorsGrid;
