date/index.js
=============
->This file contains the ReactJs code to take input from the user and get the calendar details through an api call
->It has the text box to acccept the date as input in 'yyyy/mm/dd' format, If the date is empty or it's not in specified format it display the
error message.
->once we passed the correct date it displays the weekday, date, month and year by making an API call to the server.

date/index.css
==============
->It contains the styling required for index.js file

server.js
=========
->This file contains the nodeJS code to implement an API that accepts date as input from client through POST request.
->I used Express to setup and initialize server to accept the request from client
->I used date-fns package to work with date object
->If the received date is valid, It sends weekday, date, month and year to client with status code 200 
->If the date is invalid, it sends Invalid Date as message to client with status code 400
