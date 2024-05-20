// https://app.codesignal.com/arcade/code-arcade/list-forest-edge/bq2XnSr5kbHqpHGJC

function solution(statues) {
  statues.sort((a, b) => a - b);

  let total = 0;

  for (let i = 1; i < statues.length; i++) {
    total += statues[i] - statues[i - 1] - 1;
  }

  return total;
}
