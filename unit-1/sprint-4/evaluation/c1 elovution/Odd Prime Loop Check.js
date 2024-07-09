function primeLoopCheck(num) {
  function isprime(x) {
    let n = 0;
    for (let i = 2; i < x; i++) {
      if (x % i == 0) {
        n = 1;
      }
    }
    if (n == 1) {
      return false;
    } else {
      return true;
    }
  }

  // 	console.log(isprime(4))

  for (let i = 3; i <= num; i++) {
    if (isprime(i) == true) {
      console.log(i);
    }
  }
}

primeLoopCheck(13)
