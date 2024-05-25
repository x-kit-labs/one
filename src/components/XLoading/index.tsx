import React from 'react';
import * as Next from '@alifd/next';

const XLoading = (props) => {
  const { delay = 1000, text = '内容较多，加载中，请耐心等待 ^_^' } = props;
  const [delayed, setDelayed] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setDelayed(true);
    }, delay);
  }, [delay]);

  return <Next.Loading tip={delayed ? text : null} style={{ display: 'block', marginTop: '60px' }} />;
};

export default XLoading;
