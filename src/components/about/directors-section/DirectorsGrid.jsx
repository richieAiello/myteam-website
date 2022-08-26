import DirectorsCard from './DirectorsCard';
import directorsData from './directorsData';

const DirectorsGrid = props => {
  const data = directorsData;

  return (
    <div>
      <DirectorsCard />
    </div>
  );
};

export default DirectorsGrid;
