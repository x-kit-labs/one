import * as React from 'react';
// import * as Next from '@alifd/next';

import DailyMood from '@/components/DailyMood';

import './index.scss';

const Main = () => {
  return (
    <div className="m-main-container h-full">
      <DailyMood />
    </div>
  );
};

export default Main;
