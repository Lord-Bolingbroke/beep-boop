$(document).ready(function() {
  $("#number").submit(function(event) {
    event.preventDefault();

    var inputNumber = parseInt($("#inputNumber").val());

  });
});

function zero (number) {
  if (number === 0) {
    return "Beep!"
  } else if (number === 1) {
    return "Boop!"
  } else if (number === 3) {
    return "I'm sorry, Dave. I'm afraid I can't do that."
  }
}

 function processNumber (number) {
  if (number < 0) {
    return "Please enter a whole number"
  }
}

function divisibleByThree (number) {
  if (number % 3 === 0) {
    return "I'm sorry, Dave. I'm afraid I can't do that."
  } console.log(divisibleByThree)
}

function searchForZero (number) {
  var string = number.toString()
  var stringIncludesZero = string.includes(0)
  if (stringIncludesZero === true) {
    return "Beep!"
  }
}

function searchForOne (number) {
  var string = number.toString()
  var stringIncludesOne = string.includes(1)
  if (stringIncludesOne === true) {
    return "Boop!"
  }
}

function numberCycle (inputNumber) {
  var range = [];
  console.log(inputNumber)
  for (var i = 0; i < inputNumber; i++) {
    range.push(i)
  }
  return range
}

function evaluateNums (range) {
  range.forEach()
}
