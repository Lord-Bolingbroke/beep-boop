function zero (number) {
  if (number === 0) {
    return "Beep!"
  } else if (number === 1) {
    return "Boop!"
  } else if (number === 3) {
    return "I'm sorry, Dave. I'm afraid I can't do that."
  }
}

var processNumber = function (number) {
  if (number < 0) {
    return "Please enter a whole number"
  }
}

var divisibleByThree = function (number) {
  if (number % 3 === 0) {
    return "I'm sorry, Dave. I'm afraid I can't do that."
  } console.log(divisibleByThree)
}

var searchForZero = function (number) {
  var string = number.toString()
  var stringIncludesZero = string.includes(0)
  if (stringIncludesZero === true) {
    return "Beep!"
  }
}

var searchForOne = function (number) {
  var string = number.toString()
  var stringIncludesOne = string.includes(1)
  if (stringIncludesOne === true) {
    return "Boop!"
  }
}

var userInput = [3]

function numberCycle (userInput) {
  var range = [];
  console.log(userInput)
  for (var i = 0; i < userInput; i++) {
    range.push(i)
  }
  return range;
}
