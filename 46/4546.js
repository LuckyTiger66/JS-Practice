document.querySelector(".google").addEventListener("click", function () {
  location.href = "https://www.google.com.tw/";
});

document.querySelector(".yahoo").addEventListener("click", function () {
  location.href = "https://tw.yahoo.com/";
});

document.querySelector("#google").addEventListener("click", function (e) {
  const url = `https://www.hexschool.com/?recommend=${e.target.dataset.id}`;
  location.href = url;
});

document.querySelector("#yahoo").addEventListener("click", function (e) {
  const url = `https://www.hexschool.com/?recommend=${e.target.dataset.id}`;
  location.href = url;
});

let url = "https://www.hexschool.com/?recommend=SeanLiu";
let param = url.split("=")[1];
document.querySelector("h3 span").innerText = param;
