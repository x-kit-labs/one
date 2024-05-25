export async function createFile(str) {
  const blob = new Blob(
    [str],
    { type: 'text/plain;charset=utf-8' },
  );

  return new window.File([blob], 'input.txt', { type: 'text/plain' });
}
