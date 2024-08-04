function fn(arr1, arr2) {
  let n1 = arr1.length,
    n2 = arr2.length;
  let arr3 = [];
  let i = 0,
    j = 0,
    k = 0;
  while (i < n1 && j < n2) {
    if (arr1[i] < arr2[j]) {
      arr3[k] = arr1[i];
      i++;
      k++;
    } else {
      arr3[k] = arr2[j];
      j++;
      k++;
    }
  }

  while (i < n1) {
    arr3[k] = arr1[i];
    i++, k++;
  }
  while (j < n2) {
    arr3[k] = arr2[j];
    j++;
    k++;
  }

  return arr3;
}

let x = fn([1, 3, 10, 12, 13], [2, 4, 5, 7, 9]);
console.log(x);
