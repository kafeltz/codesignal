// https://app.codesignal.com/arcade/code-arcade/list-forest-edge/3LmZafR9wMCWpdgra

function solution(arr) {
  const length = arr.length;
  const isOdd = length % 2 != 0;
  const middleIndex = Math.floor(length / 2);

  if (arr[0] != arr[length - 1]) {
    return false;
  }

  if (isOdd) {
    return arr[0] == arr[middleIndex];
  } else {
    return arr[0] == arr[middleIndex] + arr[middleIndex - 1];
  }
}
