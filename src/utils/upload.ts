import { uploadFile } from '@/api';

function getBody(xxx) {
  return xxx?.body;
}

// option {
//  onProgress: (event: { percent: number }): void,
//  onError: (event: Error, body?: Object): void,
//  onSuccess: (body: Object): void,
//  data: Object,
//  filename: String,
//  file: File,
//  withCredentials: Boolean,
//  action: String,
//  headers: Object,
//  method: String
//  timeout: Number
// }
export async function upload(option) {
  const res = await uploadFile(option.file);

  option.onSuccess({
    xx: getBody(res),
    x: option.file,
  });

  return {
    abort() {
      //
    },
  };
}
