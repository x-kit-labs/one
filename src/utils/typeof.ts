export function isString(o: unknown) {
  return typeof o === 'string';
}

export function isNotEmptyString(o: unknown) {
  return typeof o === 'string' && o;
}

export function isArray(o: unknown) {
  return Array.isArray(o);
}

export function isObject(o: unknown) {
  return typeof o === 'object' && o !== null && Object.prototype.toString.call(o) === '[object Object]';
}
