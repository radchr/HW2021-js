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

let aaa = concat30words("222 445555555");
console.log(aaa, aaa.length)