import { config, getLocale } from 'ice';

import { localeList } from '@/i18n';

/* system ---------------------------*/
export const LOCALE_ACTIVE = getLocale();
export const EN_ACTIVE = LOCALE_ACTIVE === localeList[0];
export const LOCALE_TARGET = localeList[EN_ACTIVE ? 1 : 0];

export const BASE_URL = config.server;
export const LS_AUTH_K = 'one_auth_ls_key';
export const STATIC_JSON_PRE = 'https://public-bucket-realign.nos-eastchina1.126.net/json';

/* station ---------------------------*/
export const OPENER_CHILD_KEY = 'child-loaded';
export const STATIC_LOGO = 'https://public-bucket-electron.nos-eastchina1.126.net/web-common/one-ico.png';
export const FileExtnamePreview = {
  'image/*': 'image',
  'video/*': 'video',
  'audio/*': 'audio',
  '.txt': 'text',
  '.css': 'text',
  '.scss': 'text',
  '.js': 'text',
  '.ts': 'text',
  '.jsx': 'text',
  '.tsx': 'text',
};

/* note ------------------------------*/
export const LS_NOTES_K = 'data_notes_ls_key';
