import DirectorsCard from './DirectorsCard';
import directorsData from './directorsData';

const DirectorsGrid = props => {
  const data = directorsData;

  return (
    <div className="grid gap-y-[3.25rem]">
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
