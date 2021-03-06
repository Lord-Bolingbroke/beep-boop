// User interface logic
$(document).ready(function() {
  $("#number").submit(function(event) {
    event.preventDefault();
    var inputNumber = parseInt($("#inputNumber").val());
    $("#results").text(listRange(inputNumber))
  });
});

// Business logic
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
  return replaceNums(range)
}

function replaceNums(range) {
  var newRange = [];
  range.forEach(function(number) {
    var numberIncludesOne = number.toString().includes(1)
    var numberIncludesZero = number.toString().includes(0)
    if (number % 3 === 0) {
      newRange.push(' "I\'m sorry, Dave. I\'m afraid I can\'t do that."')
    } else if (numberIncludesOne === true) {
      newRange.push(' "Boop!"')
    } else if (numberIncludesZero === true) {
      newRange.push(' "Beep!"')
    } else {
      newRange.push(" " + number)
    }
  });
  return newRange
}
