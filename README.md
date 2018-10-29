# _Beep Boop_

#### _A website that returns an array of integers and strings, 2018-10-26_

#### By _Noah Schooler_

## Description
_The website takes an integer inputted by the user and returns the range of integers between zero and the input, replacing certain numbers with text (described in the behavioral specs below)._

## Setup/Installation Requirements
* Clone code from the repository
* Open index.html in a browser

## Known Bugs
There are no spaces between the outputted values, and the text outputs are not within quotation marks.

## Support and contact details
_Noah Schooler: noahschooler1@gmail.com_

## Behavioral Specifications
* Program replaces numbers containing 0 with "Beep!":
  * Expect input(20) to return ("Beep!")
* Program replaces numbers containing 1 with "Boop!":
  * Expect input(71) to return ("Boop!")
* Program replaces numbers divisible 3 with "I'm sorry, Dave. I'm afraid I can't do that.":
  * Expect input(9) to return ("I'm sorry, Dave. I'm afraid I can't do that.")
* Program applies the above rules in increasing order of priority—numbers that contain both 0 and 1 are replaced with "Boop!"; numbers that both contain one and are divisible by three are replaced with "I'm sorry, Dave. ...":
  * Expect input(12) to return ("I'm sorry, Dave. ...")
  * Expect input(10) to return ("Boop!")
  * Expect input(90) to return ("I'm sorry, Dave. ...")
* Program returns the range of integers between 0 and the user input using the above rules:
  * Expect input(5) to return ("Beep!", "Boop!", 2, "I'm sorry, Dave. I'm afraid I can't do that.", 4, 5)

## Technologies Used
_Bootstrap, jQuery, and JavaScript_

### License
*MIT License*
Copyright (c) 2018 **_Noah Schooler_**
