// https://base64.guru/standards/base64url/decode
import * as Base64Url from 'js-base64';

export const enc = Base64Url.encodeURL;
export const dec = Base64Url.decode;
