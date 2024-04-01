// https://app.codesignal.com/arcade/code-arcade/list-forest-edge/mCkmbxdMsMTjBc3Bm

function solution(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map((value) => {
    if (value == elemToReplace) {
      return substitutionElem;
    } else {
      return value;
    }
  });
}
