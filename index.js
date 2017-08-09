var input = document.getElementsByTagName('input');
var output = document.getElementsByClassName('date-output');


input[0].addEventListener("keyup", function(){

   var inputValue = input[0].value;
   parseDateInputValue(inputValue);
});




function parseDateInputValue(stringValue){

    var date = stringValue.split('-');
    var timeAndYear = date[2].split(" ");
    var hourAndMinute = timeAndYear[1].split(':');

    var currentDate = new Date(timeAndYear[0], date[1]-1, date[0], hourAndMinute[0], hourAndMinute[1]);

    output[0].innerHTML = currentDate;
}


