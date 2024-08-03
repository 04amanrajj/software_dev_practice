function check(arr, k) {
  let l = 0,
    r = arr.length - 1,
    sum = arr[l] + arr[r];

  arr.sort(function (a, b) {
    return a - b;
  });

  while (l < r) {
    if (sum == k) return true;
    else if (sum < k) l++;
    else r++;
  }
  return false;
}
console.log(check([1, 2, 12, 3, 5, 3, 8, 4, 7, 10], 11));
