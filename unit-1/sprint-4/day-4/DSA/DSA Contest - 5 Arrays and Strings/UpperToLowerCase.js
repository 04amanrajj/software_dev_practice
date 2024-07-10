function convertStr(N, str) {
  let u = "ABCDEFGHIJKLMNOPQRTUVWXYZ";
  let l = "abcdefghijklmnopqrstuvwxyz";
  let nstr = "";

  for (let i = 0; i < N; i++) {
    let isUpperCase = false;
    let isLowerCase = false;

    for (let k = 0; k < 26; k++) {
      if (str[i] === u[k]) {
        isUpperCase = true;
        break;
      }
    }
    for (let k = 0; k < 26; k++) {
      if (str[i] === l[k]) {
        isLowerCase = true;
        break;
      }
    }
    if (isUpperCase) {
      nstr += str[i].toLowerCase();
    } else if (isLowerCase) {
      nstr += str[i].toUpperCase();
    } else {
      nstr += str[i];
    }
  }

  console.log(nstr);
}

convertStr(5,'aBace')
