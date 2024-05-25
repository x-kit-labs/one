import { config } from 'ice';

export const BASE_URL = config.server;

export const LS_K = 'transfer_station_ls_key';

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
