import superagent from 'superagent';

import { BASE_URL } from '@/constants';

export async function uploadFile(file) {
  try {
    const res = await superagent
      //
      .post(`${BASE_URL}/o/station/upload`)
      .attach('file', file);
    return res;
  } catch (e) {
    return {
      success: false,
    };
  }
}
