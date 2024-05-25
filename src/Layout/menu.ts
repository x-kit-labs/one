import rc from '@/routes';

export const getKeyByPath = (path: string) => {
  return `rk_${path.replace('/', '_')}`;
};

export const getMenuData = () => {
  const MenuData: Array<{
    key: string;
    path: string;
    label: string;
    icon: string;
  }> = [];
  rc[0].children.reduce((prev, item) => {
    const {
      //
      menu,
      path = '',
      label = '',
      icon = '',
    } = item;
    if (menu) {
      prev.push({
        key: getKeyByPath(path),
        path,
        label,
        icon,
      });
    }
    return prev;
  }, MenuData);

  return MenuData;
};
