import { useState } from 'react';
import { ReactComponent as Twitter } from '../../../assets/icons/icon-twitter.svg';
import { ReactComponent as Linkedin } from '../../../assets/icons/icon-linkedin.svg';
import plus from '../../../assets/icons/icon-cross.svg';
import clsx from 'clsx';

// Animate when card flips. Use Fade
const DirectorsCard = props => {
  const [flipped, setFlipped] = useState(false);

  const handleButtonClick = e => setFlipped(!flipped);

  return (
    <div className="bg-state-green h-[253px] px-6 relative flex flex-col items-center lg:px-12">
      {!flipped ? (
        <>
          <img
            src={props.image}
            alt=""
            className="mt-[1.875rem] mb-[0.875rem] h-24 w-24 border-2 border-solid border-[#C4FFFE] rounded-full"
          />
          <h4 className="heading--sub text-rapture-blue">
            {props.name}
          </h4>
          <p className="italic font-medium">{props.position}</p>
        </>
      ) : (
        <>
          <h4 className="heading--sub text-rapture-blue mt-[2.1875rem] mb-2">
            {props.name}
          </h4>
          <p className="mb-6">{props.quote}</p>
          <div className="grid grid-flow-col gap-x-4">
            <a href={props.twitter} className="link">
              <Twitter className="icon" />
            </a>
            <a href={props.linkedin} className="link">
              <Linkedin className="icon" />
            </a>
          </div>
        </>
      )}
      <button
        className={`
          h-14 w-14  rounded-full flex items-center justify-center
          absolute left-0 right-0 mx-auto -bottom-[1.75rem] duration-300
          ${clsx({
            'bg-coral': !flipped,
            'hover:bg-rapture-blue': !flipped,
            'bg-rapture-blue': flipped,
            'hover:bg-coral': flipped,
          })}
        `}
        onClick={handleButtonClick}
      >
        <img
          src={plus}
          alt=""
          className={`
          duration-300
          ${clsx({
            'rotate-[225deg]': flipped,
          })}`}
        />
      </button>
    </div>
  );
};

export default DirectorsCard;
