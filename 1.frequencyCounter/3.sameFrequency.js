function sameFrequency(number1, number2) {
  const number = {};

  const sNumber1 = number1.toString();
  const sNumber2 = number2.toString();

  for (let i = 0; i < sNumber1.length; i++) {
    let digit = sNumber1[i];
    number[digit] ? number[digit] += 1 : number[digit] = 1;
  }
  
  for (let i = 0; i < sNumber2.length; i++) {
    let digit = sNumber2[i];

    if (!number[digit]) {
      return false;
    } else {
      number[digit] -= 1;
    }
  }

  return true;
}
