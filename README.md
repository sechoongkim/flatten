# Overview

This application provides a function which flattens an array. It loops through the input array and checks if each element is of type array. If an element is of type array, it recursively calls flatten() with that element as input, and appends the result to the current stack's array elements. 

# Testing

Unit tests have been added.

$> cd flatten
$> npm install
$> npm test

