Collection of JavaScript Random Functions
******************************************

This is a collection of a few useful functions for getting random numbers with JavaScript

Math.random()
*************

This is the default JavaScript random function.
It returns a random float between 0(inclusive) and 1(exclusive)

getRandomArbitary()
*******************

Accepts a minimum (min) and maximum (max) value
Returns a random float between  min(inclusive) and max(exclusive)

getRandomInt()
**************

Accepts a maximum value (max) and optionally a minimum (min) one
JavaScript does not support function overloading so we have to check inside the function how many parameters where passed (by checking if min === "undefined")
If only the max was passed the function returns an integer between 0(inclusive) and max(exclusive)
If both min and max is passed the integer is between min(inclusive) and max(exclusive)