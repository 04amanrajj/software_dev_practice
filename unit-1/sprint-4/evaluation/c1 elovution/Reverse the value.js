function reverseTheValue(num) {
    let num2,
      bag = "";
    num2 = num.toString();
    for (let i = num2.length - 1; i >= 0; i--) {
      bag += num2[i];
    }
    Number(bag);
  
    console.log(bag);
  }
  
  