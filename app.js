function currentTime() {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  hour = hour > 12 ? hour - 12 : hour;
  hour = twoDigits(hour);
  min = twoDigits(min);
  sec = twoDigits(sec);

document.querySelector("#clock").innerHTML = `${hour} : ${min} : ${sec}`;
}

let twoDigits = num => (num < 10 ? "0" + num : num);

let time = setInterval(currentTime, 1000);
