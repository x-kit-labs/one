import * as superagent from 'superagent';

import { STATIC_JSON_PRE } from '@/constants';

export async function queryAllNotes() {
  try {
    const url = `${STATIC_JSON_PRE}/web_one_notes.json`;
    const res = await superagent.get(url);
    const resObj = JSON.parse(res.text);
    return resObj;
  } catch (e) {
    return {
      success: false,
    };
  }
}
