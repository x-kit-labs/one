import React from 'react';

import { getRandomMood } from './mood-data';

const DailyMood = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-16 w-full h-full">
      <div className="flex w-32">
        <img className="w-32 h-32" src={getRandomMood()} />
      </div>
      <div className="flex">
        <img className="" src="https://v1.jinrishici.com/all.svg" />
      </div>
      <div className="flex w-1 h-1" />
    </div>
  );
};

export default DailyMood;
