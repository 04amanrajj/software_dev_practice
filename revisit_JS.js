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


