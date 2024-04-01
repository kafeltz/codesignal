// https://app.codesignal.com/arcade/code-arcade/list-forest-edge/APD5T5CybxTtfkdjL

function solution(arr) {
  const isOdd = arr.length % 2 != 0;

  if (isOdd) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const sum = arr[middle] + arr[middle - 1];

  console.log(sum);

  arr.splice(middle - 1, 2);
  arr.splice(middle - 1, 0, sum);

  return arr;
}
