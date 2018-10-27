$(document).ready(function() {
  $("#number").submit(function(event) {
    event.preventDefault();

    var inputNumber = parseInt($("#inputNumber").val());
    var result = replaceNums(range)
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

function replaceNums(range) {
  var newRange = [];

  range.forEach(function(number) {

    var string = number.toString()
    var stringIncludesZero = string.includes(0)
    var stringIncludesOne = string.includes(1)
    if (number % 3 === 0) {
      newRange.push("I'm sorry, Dave. I'm afraid I can't do that.")
    } else if (stringIncludesOne === true) {
      newRange.push("Boop!")
    } else if (stringIncludesZero === true) {
      newRange.push("Beep!")
    } else {
      newRange.push(number)
    }
  });
  return newRange
}
