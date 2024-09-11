import * as superagent from 'superagent';

export async function queryAuth(authKey) {
  try {
    const url = `https://public-bucket-realign.nos-eastchina1.126.net/json/${authKey}.json`;
    const res = await superagent.get(url);
    const resObj = JSON.parse(res.text);
    return resObj;
  } catch (e) {
    return {
      success: false,
    };
  }
}
