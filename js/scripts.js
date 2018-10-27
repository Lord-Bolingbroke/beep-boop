$(document).ready(function() {
  $("#number").submit(function(event) {
    event.preventDefault();

    var inputNumber = parseInt($("#inputNumber").val());
    var result = listRange(inputNumber)
    $("#results").text(result)

  });
});

function listRange(inputNumber) {
  var range = [];
  if (inputNumber >= 0) {
    for (var i = 0; i <= inputNumber; i++) {
      range.push(i)
    }
  } else if (inputNumber < 0) {
    for (var i = 0; i >= inputNumber; inputNumber++) {
      range.push(inputNumber)
    }
  }
  return range
}

function replaceNums(number) {
  var string = number.toString()
  var stringIncludesZero = string.includes(0)
  var stringIncludesOne = string.includes(1)
  if (number % 3 === 0) {
    return "I'm sorry, Dave. I'm afraid I can't do that."
  } else if (stringIncludesOne === true) {
    return "Boop!"
  } else if (stringIncludesZero === true) {
    return "Beep!"
  } else {
    return number
  }
}
