// https://app.codesignal.com/arcade/code-arcade/list-forest-edge/ND8nghbndTNKPP4Tb

function solution(arr) {
  if (arr.length > 1) {
    const last = arr.length - 1;

    arr[0] = arr[0] ^ arr[last];
    arr[last] = arr[0] ^ arr[last];
    arr[0] = arr[0] ^ arr[last];
  }

  return arr;
}
