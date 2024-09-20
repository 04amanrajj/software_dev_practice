// hosting
{
  let x = 4;

  function name() {
    console.log("hi");
  }

  name();
  console.log(x);
}
// functoins scops

{
  let x = 1;
  a();
  b();
  console.log(x);

  function a() {
    let x = 100;
    console.log(x);
  }

  function b() {
    let x = 10;
    console.log(x);
  }
}
{
  function ab() {
    console.log(a);
  }
  let a = 10;
  ab(); //this.a===window.a
}

{
  //console.log(x); cant access because its in not globel mermory
  console.log(y); //access but its undefined
  let x;
  var y;
}

// shadowing variable
var am = 10;
{
  var am = 20; //update the am
  console.log(am); //20
}
console.log(am); //20

// closure
{
  function c() {
    let x = 99;
    return function inc() {
      console.log(x);
    };
  }
  let closure = c();
  console.log(closure);
  closure();
}

// setTimeout with closure
{
  for (let i = 0; i < 5; i++) {
    function close(x) {
      setTimeout(() => {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
}

// function statement or declareation
function name() {
  console.log("function statement");
}
// function expression
let myFun = function () {
  console.log("function expression");
};

//annonymous function
// function () {
//   console.log("annonymous expression");
// };

let newFun = function nameFun() {
  console.log("function expression", nameFun);
  //can use function inside this function
};

// aruguments vs perameters?
// calling myFun(arug1,arug2) are arguments
// reciving arguments called perameters like
// myFun(peram1,peram2)

// first class function - ability to use like values
// passing functions as arguments or returning functions as value
