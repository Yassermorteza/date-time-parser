# date-time-parser

Date Time Parser

When a user enters a date in a input, very often the developer has to parse the value input to create a valid Date object instance.

Resources

Date documentation about the Date object
Steps

Preparation

Create a new repository called date-time-parser with the initial index.html and index.js and commit them with the commit message Initial Commit and push to master.

HTML

In your index.html file, create a text input with a placeholder attribute 29-04-1992 23:05.

Add a div with class date-output.

Note: the use of id attributes in your HTML is forbidden.

Commit your files with the message add HTML and push to master.

Interaction

Add an event listener on the input for the keyup event which calls a function called parseDateInputValue.

Event Listener
Commit your files with the message add event listener on input and push to master.

Parsing

Create a function called parseDateInputValue which takes 1 argument (stringValue) and returns an instance of the Date object as follow

var parsedDate = parseDateInputValue('29-04-1992 23:05');
console.info(parsedDate.toString()); // => "Fri May 29 1992 23:05:00 GMT+0200 (CEST)"
Update the content of the .date-output div with the result of parsedDateInputValue.

Usage
Commit your files with the message work on parseDateInputValue and push to master.

Bonus

Add a pattern attribute to the input element to validated the user what the format of what the user types in.

If the value is invalid, the content of the .output should be an error message mentioning that the format should be "DD-MM-YYYY HH:mm".

Commit your files with the message add input validation and push to master.