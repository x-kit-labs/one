import * as React from 'react';

export type T_ScreenType = 'phone' | 'tablet' | 'desktop';

export const useScreenType = () => {
  const [type, setType] = React.useState<T_ScreenType>('desktop');

  React.useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(max-width: 767px)').matches) {
        setType('phone');
      } else if (window.matchMedia('(min-width: 768px) and (max-width: 1024px)').matches) {
        setType('tablet');
      } else {
        setType('desktop');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    type,
  };
};
