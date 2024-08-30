let data = [
  { name: "aman", sub: "JS" },
  { name: "aman", sub: "C" },
  { name: "aman", sub: "CSS" },
  { name: "ezio", sub: "eng" },
  { name: "ezio", sub: "rust" },
  { name: "cj", sub: "elm" },
  { name: "cj", sub: "math" },
];

let subject = data.reduce((acc, item) => {
  let name = item.name;
  let sub = item.sub;

  // if(!acc[name]) acc[name]=[]

  acc[name] = acc[name] || [];
  acc[name].push(sub);

  return acc;
}, {});

console.log(subject);
