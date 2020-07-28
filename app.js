let obj = {};
let i = 65;
while (i < 91) {
  obj[`${i}`] = String.fromCharCode(i);
  i++;
}

const caesar = function(string, number) {
  let n = getNumber(number);
  console.log("n: " + n);
  //caesar code
  let i = 0;
  let output = "";
  for (i; i < string.length; i++) {
    if (string[i].charCodeAt() > 90) {
      output += getLetter(string[i], n).toLowerCase();
      continue;
    }
    if (upperCode(string[i]) > 64 && upperCode(string[i]) < 91) {
      output += getLetter(string[i], n);
      continue;
    }
    output += string[i];
  }
  console.log(`length = ${output.length}`);
  return output;
};
//input letter, output changed letter
function getLetter(char, number) {
  let ret;

  if (upperCode(char) + number > 90) {
    ret = 65 + (upperCode(char) + number - 91);
    return obj[ret];
  } else if (upperCode(char) + number < 65) {
    ret = 90 + (upperCode(char) - 64 + number);
    return obj[ret];
  } else {
    return obj[upperCode(char) + number];
  }
}

//gets the code of the letter in uppercase
function upperCode(s) {
  return s.toUpperCase().charCodeAt();
}
//converts really large numbers to small equivalents (26 == 1)
function getNumber(number) {
  if (number > 0) {
    while (number >= 26) {
      number = number - 26;
    }
    return number;
  }
  if (number < 0) {
    while (number <= -26) {
      number = number + 26;
    }
    return number;
  }
  return number;
}

const input = document.querySelector('#input');
const output = document.querySelector('#output')

let text = String(prompt('What text do you want to encrypt?', "You didn't put anything!"))
let times = prompt('How many words do you wish to shift?')

input.textContent += text;
output.textContent += caesar(text, +times);

