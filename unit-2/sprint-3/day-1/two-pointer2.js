function check(arr, n, k) {
  arr.sort(function (a, b) {
    return a - b;
  });

  for (i = 0; i < n - 2; i++) {
    let l = i + 1,
      r = n - 1,
      sum = arr[i] + arr[l] + arr[r];

    while (l < r) {
      if (sum == k) {
        console.log(arr)
        console.log(arr[i],arr[l],arr[r]);
        return true;
      } else if (sum < k) l++;
      else r--;
    }
  }
  return false;
}
console.log(check([1, 2, 12, 3, 5, 3, 8, 4, 7, 10], 10, 23));
