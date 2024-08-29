var sayArrowHello = () => {
    console.log("Arrow Hello ", this);
  };
  
  sayArrowHello();
  
  function sayRegularHello() {
    console.log("Regular Hello ", this);
  }
  
  sayRegularHello()