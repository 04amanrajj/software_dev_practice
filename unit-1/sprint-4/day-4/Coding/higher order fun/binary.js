function binaryString(N, str) {
  let max = 0;
  let count = 0;
  for (let i = 0; i < N; i++) {
    if (str[i] == 0) {
      count++;
      // if(max < count) max = count
      max = Math.max(max, count);
    } else count = 0; //console.log(sum,count)
  }
  console.log(max);
}

binaryString(7,'1000100');
