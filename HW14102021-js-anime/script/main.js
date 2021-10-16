const btn = document.querySelector(".btn");
const main = document.querySelector(".main");
let k = 0;

btn.addEventListener("click", () => {
  const inp = document.querySelector(".inp");
  k = inp.value;

  const showSecond = () => {
    main.innerText = k;
    k--;

    if (k == -1) {
      console.log("STOP");
      clearInterval(timer);
    }
  };
  const timer = setInterval(showSecond, 1000);
});

