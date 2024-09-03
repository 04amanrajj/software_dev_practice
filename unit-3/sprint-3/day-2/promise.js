function getPromise(num) {
  let r = Math.sqrt(num);
  r = Math.floor(r);
  let pro = new Promise((res, rej) => {
    if (r || r == 0) res(r);
    else rej("Invalid");
  });

  pro.then((res) => console.log(res)).catch((err) => console.log(err));
}

getPromise(101);
