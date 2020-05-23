//第三题
var arr = [12,34,32,89,4]

var res = arr.sort((a,b)=> a-b)[0];

//第九题
new Promise((resolve) => {
  setTimeout(() => {
    var a = "hello";
    resolve(a);
  }, 10)
}).then((a) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      var b = "lagou";
      resolve(a + b);
    }, 10)
  })
}).then((b) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      var c = "I love you";
      resolve(b + c);
    }, 10)
  })
}).then((c) => {console.log(c)})
