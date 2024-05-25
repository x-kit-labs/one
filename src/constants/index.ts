import { config } from 'ice';

export const BASE_URL = config.server;

export const LS_K = 'transfer_station_ls_key';

export const OPENER_CHILD_KEY = 'child-loaded';

export const STATIC_LOGO =
  'https://public.nftstatic.com/static/nft/res/nft-cex/S3/1687441286901_ubhq6lsxl7hatnac7b764ad1luw9adn0.png';

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
