function checkVowel(N, str) {
    let found = false;
    for (let i = 0; i < N; i++) {
      if (str[i] == 'a') {
        found = true;
        break;
      } else {
        if (str[i] == 'e') {
          found = true;
          break;
        } else {
          if (str[i] == 'i') {
            found = true;
            break;
          } else {
            if (str[i] == 'o') {
              found = true;
              break;
            } else {
              if (str[i] == 'u') {
                found = true;
                break;
              }
            }
          }
        }
      }
    }
    if (found) {
      console.log('true');
    } else {
      console.log('false');
    }
  }
  
  