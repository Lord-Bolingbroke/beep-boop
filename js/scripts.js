function zero (number) {
  if (number === 0) {
    return "Beep!"
  } else if (number === 1) {
    return "Boop!"
  } else if (number === 3) {
    return "I'm sorry, Dave. I'm afraid I can't do that."
  }
}

function divisibleByThree (number) {
  if (number % 3 === 0) {
    return "I'm sorry, Dave. I'm afraid I can't do that."
  } else if (number % 3 ==! 3) {
    searchForZero(number)
  }
}

function searchForZero (number) {
  var string = number.toString()
  console.log(string);
  var stringIncludesZero = string.includes(0)
  console.log(stringIncludesZero);
  if (stringIncludesZero === true) {
    return "Beep!"
  }
}

function searchForOne (number) {
  var string = number.toString()
  console.log(string);
  var stringIncludesOne = string.includes(1)
  console.log(stringIncludesOne);
  if (stringIncludesOne === true) {
    return "Boop!"
  }
}
