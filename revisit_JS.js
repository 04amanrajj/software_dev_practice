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
function c() {
  let x = 99;
  return function inc() {
    console.log(x);
  };
}
let closure = c();
console.log(closure);
closure()