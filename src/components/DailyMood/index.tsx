import * as React from 'react';

// import { EN_ACTIVE } from '@/constants';
// import { dailyEnJuHe, dailyShiCi } from '@/api';

import { getRandomMood } from './mood-data';

const DailyMood = () => {
  // const api = EN_ACTIVE ? dailyEnJuHe : dailyShiCi;

  // const [dailyContent, setDailyContent] = React.useState<string>('');

  // const fetchDailyData = async () => {
  //   const res = await api();
  //   setDailyContent(res);
  // };
  // React.useEffect(() => {
  //   fetchDailyData();
  // }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-16 w-full h-full">
      <div className="flex w-32">
        <img className="w-32 h-32" src={getRandomMood()} />
      </div>
      <div className="flex">
        {/* <img className="" src="https://v1.jinrishici.com/all.svg" /> */}
        {/* <div>{dailyContent}</div> */}
      </div>
      <div className="flex w-1 h-1" />
    </div>
  );
};

export default DailyMood;
