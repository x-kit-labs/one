import * as superagent from 'superagent';

// import { getToday } from '@/utils';

// export async function dailyShanBay() {
//   try {
//     const url = 'https://apiv3.shanbay.com/weapps/dailyquote/quote/';
//     const res = await superagent.get(url);
//     const resObj = JSON.parse(res.text);
//     return resObj;
//   } catch (e) {
//     return {};
//   }
// }

// export async function dailyCiBa() {
//   try {
//     const url = `http://sentence.iciba.com/index.php?c=dailysentence&m=getdetail&title=${getToday()}`;
//     const res = await superagent.get(url);
//     const resObj = JSON.parse(res.text);
//     return resObj;
//   } catch (e) {
//     return {};
//   }
// }

// export async function dailyYouDao() {
//   try {
//     const url = `https://dict.youdao.com/infoline?mode=publish&update=auto&apiversion=5.0&date=${getToday()}`;
//     const res = await superagent.get(url);
//     const resObj = JSON.parse(res.text);
//     return resObj;
//   } catch (e) {
//     return {};
//   }
// }

export async function dailyShiCi() {
  try {
    const url = 'https://v2.jinrishici.com/one.json';
    const res = await superagent.get(url);
    const resObj = JSON.parse(res.text);
    return resObj?.data?.content || '';
  } catch (e) {
    return '';
  }
}

export async function dailyEnJuHe() {
  try {
    const url = 'http://apis.juhe.cn/fapigx/everyday/query?key=64f85d8e23ee254234d70add3b09fd27';
    const res = await superagent.get(url);
    const resObj = JSON.parse(res.text);
    return resObj?.result?.content || '';
  } catch (e) {
    return '';
  }
}
