const os=require("os")

console.log(os.cpus()[0].model);
console.log(os.version());
console.log((os.uptime()/60/60).toFixed(2),"Hours");