const btn = document.querySelector(".search-btn");
const text = document.querySelector(".text");
const out = document.querySelector(".part2");
const max = document.querySelector(".max-word");
const sent = document.querySelector(".sent-30words");

function concat30words(str){
  if (str.length === 0) {
    return "Введите слова"
  }
  let a = str.length;
  let b = "";
while (b.length < 30) {
b = b.concat(str);
console.log(b.length)
} 
return b.slice(0,30)
}

function generate (){
  if (text.value.length === 0){
   return out.innerHTML = "<div> Введите хотя бы одно слово </div>"
  }
  let splStr = text.value.split(" ");
  let tempStr = "";
  let tempMax = 0;
  for (let i = 0; i < splStr.length; i++) {
    tempStr = `
    ${tempStr}
    <div class="out">
          <textarea
          class="text"
          placeholder="${splStr[i]}"
          name="text"
        ></textarea>
    </div>
    `;
    if (splStr[i].length > splStr[tempMax].length) {
      tempMax = i;
    }
  }
  out.innerHTML = tempStr;
  max.innerHTML =   `First max length word ${splStr[tempMax]}`;
  let a = concat30words(text.value)
  
  sent.innerHTML = `Sentence with 30 symbols -> ${a}`
  console.log(text.value);
}



btn.addEventListener("click", generate);



