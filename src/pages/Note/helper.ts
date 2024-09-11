import { T_ScreenType } from '@/hooks';

export const handleText = (txt: string) => {
  // return (txt || '').replace(/\n/gim, '<br>');
  return txt;
};

export const waterfallPropsMap: Record<
  T_ScreenType,
  {
    gap: number;
    cols: number;
  }
> = {
  desktop: {
    gap: 100,
    cols: 3,
  },
  tablet: {
    gap: 100,
    cols: 2,
  },
  phone: {
    gap: 100,
    cols: 1,
  },
};

type T_HotKeysKey = 'add' | 'save' | 'edit' | 'delete';
export const HotKeysRegisterIntroMap: Record<
  T_HotKeysKey,
  {
    key: string;
    i18nKey: string;
  }
> = {
  add: {
    key: 'shift+a',
    i18nKey: 'o-note-hotkey-add',
  },
  save: {
    key: 'shift+s',
    i18nKey: 'o-note-hotkey-save',
  },
  edit: {
    key: 'shift+e',
    i18nKey: 'o-note-hotkey-edit',
  },
  delete: {
    key: 'shift+d',
    i18nKey: 'o-note-hotkey-delete',
  },
};

export interface IF_HotKeysTableItem {
  hotKey: string;
  descI18nKey: string;
}

export const getHotKeysTableData = () => {
  const result: IF_HotKeysTableItem[] = [];
  Object.keys(HotKeysRegisterIntroMap).forEach((k) => {
    result.push({
      hotKey: HotKeysRegisterIntroMap[k].key,
      descI18nKey: HotKeysRegisterIntroMap[k].i18nKey,
    });
  });
  return result;
};
