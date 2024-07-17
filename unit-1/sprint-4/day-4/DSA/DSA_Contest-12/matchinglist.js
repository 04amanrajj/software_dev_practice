function partyPlanning(N, arr, M, arr2) {
  let obj = {};

  for (let num of arr) obj[num] ? obj[num]++ : (obj[num] = 1);

  for (let a of arr2) {
    if (obj[a] === undefined) {
      console.log("No");
      return;
    }
  }

  console.log("Yes");
}


partyPlanning(5,[1,2,3,4,5],6,[5,4,3,2,1,0])