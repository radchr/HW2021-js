const btn = document.querySelector(".play-btn"), 
      text = document.querySelector(".timer__main-clock ");
      audio = document.querySelector(".audio");
      body = document.querySelector("body");
      pic = document.querySelector(".pic")
let k = 0, c = new Date(60*1000 - 3*60*60*1000 -1000).toString().split(" ");

function getCountTime(hourNow, minuteNow, hourGet, minuteGet){
  let hours = hourGet - hourNow, minutes = minuteGet - minuteNow;
  if (hours >= 0 && minutes >=0){return (hours*60*60 + minutes*60)}
  else if (hours === 0 && minutes < 0) {return (23 * 60*60 + (60 - minuteNow + minuteGet)*60)} 
  else if (hours < 0 && minutes >= 0) {return ((24 - hourNow + hourGet)*60*60 + minutes*60)}
  else if (hours < 0 && minutes < 0) {return ((24 - hourNow + hourGet)*60*60 + (60 - minuteNow + minuteGet)*60 )
  }
}


btn.addEventListener("click", () => {
  const w = document.querySelector(".time-inp").value.split(":");
  let getHour = +w[0], getMinute = +w[1];
  let z = new Date().toString().split(" ");
  let timeNow = z[4].split(":");
  let timeNowHour = +timeNow[0], timeNowMinute = +timeNow[1];
  k = getCountTime(timeNowHour, timeNowMinute, getHour, getMinute);
  audio.innerHTML = "<audio src='./sounds/1.mp3' autoplay loop></audio>";
  const showSecond = () => {
    k--;
    let c = new Date(k*1000 - 3*60*60*1000 ).toString().split(" ");
    text.innerText = c[4];
    
    if (k == 0) {
      console.log("STOP");
      clearInterval(timer);
      text.innerText = "00:00:00";
      audio.innerHTML = "<audio src='./sounds/boom.wav' autoplay loop></audio>";
    }
  };
  const timer = setInterval(showSecond, 1000);
  
});

