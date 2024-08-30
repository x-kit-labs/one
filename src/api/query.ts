import * as superagent from 'superagent';

import { BASE_URL } from '@/constants';

export async function queryMimetype() {
  try {
    const url = `${BASE_URL}/openapi/station/query-mimetype`;
    const res = await superagent.get(url);
    const resObj = JSON.parse(res.text);
    return resObj;
  } catch (e) {
    return {
      success: false,
    };
  }
}

export async function queryText() {
  try {
    const url = `${BASE_URL}/openapi/station/query`;
    const res = await superagent.get(url);
    return res.text;
  } catch (e) {
    return {
      success: false,
    };
  }
}
