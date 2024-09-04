function getData(data) {
  return new Promise((res, rej) => {
    // console.log(data!=typeof Number);
    if (typeof data !== 'number') rej("error");
    else if (data % 2 != 0) setTimeout(()=>{res("odd");},2000)
    else setTimeout(()=>{res("even");},4000)
  });
}


export default getData
