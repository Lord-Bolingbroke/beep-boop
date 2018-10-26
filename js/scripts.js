$(document).ready(function() {
  $("#number").submit(function(event) {
    event.preventDefault();

    var inputNumber = parseInt($("#inputNumber").val());
    var result = numberCycle(inputNumber)
    $("#results").text(result)

  });
});


function numberCycle (inputNumber) {
  var range = [];
  if (inputNumber >= 0) {
    for (var i = 0; i <= inputNumber; i++) {
      range.push(i)
    }
  } else if (inputNumber < 0) {
    for (var i = 0; i >= inputNumber; i--) {
      range.push(i)
    }
  }
  return range
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


function evaluateNums (range) {
  range.forEach()
}
