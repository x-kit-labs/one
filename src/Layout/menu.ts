import { LOCALE_ACTIVE } from '@/constants';
import rc from '@/routes';

export const getKeyByPath = (path: string) => {
  let _path = path;
  if (!_path.startsWith(`/${LOCALE_ACTIVE}`)) {
    //
    _path = `/${LOCALE_ACTIVE}${_path === '/' ? '' : _path}`;
  }
  return `rk_${_path.replace('/', '_')}`;
};

export const getMenuData = () => {
  const MenuData: Array<{
    key: string;
    path: string;
    labelI18n: string;
    icon: string;
  }> = [];
  rc[0].children.reduce((prev, item) => {
    const {
      //
      menu,
      path = '',
      labelI18n = '',
      icon = '',
    } = item;
    if (menu) {
      prev.push({
        key: getKeyByPath(path),
        path,
        labelI18n,
        icon,
      });
    }
    return prev;
  }, MenuData);

  return MenuData;
};
