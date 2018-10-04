// Looping a triangle //
let str = "";
for (let i = 0; i < 7; i++) {
  str += "#";
  console.log(str);
}

// FizzBuzz //
for (let i = 1; i <= 100; i++) {
    let printStr = "";
    if (i % 3 == 0) {
      printStr += "Fizz";
      if (i % 5 == 0) {
      printStr += "Buzz";
      }
    }
    else if (i % 5 == 0) {
      printStr += "Buzz";
    }
    else {
      printStr += i;
    }
    console.log(printStr);
  }

// Chessboard //
let size = 8;
let str = "";
for (i = 0; i < size; i ++) {
  let v = 0;
  if (i % 2 == 0) {
    v = 1;
  }
  
  for (j = 0; j < size; j ++) {
    if (j % 2 == v) {
      str += "#";
    }
    else {
      str += " ";
    }
  }
  str += "\n"
}
console.log(str);
       