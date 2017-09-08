# Find Available Employee Hours
Given an input file with default and employee specific data, this script will output employee hours available.
Here's an example input to the script as parsed in from the input file: 
```
1,"12/06/2015","12/09/2015"
```
Here's a link to the full input file: [Input File](https://raw.githubusercontent.com/JackieCalapristi/JackieJackie11.github.io./master/puzzles/FindAvailableEmployeeHours/input.txt)

Here's an example output:
```
"12/06/2015",0
"12/07/2015",4
"12/08/2015",4
"12/09/2015",8
```
## Getting Started
1. Make sure PHP is installed on your machine and that you are running any &ast;nix system. 
2. Download `FindAvailableEmployeeHours.php` & `input.txt` to your local machine.
3. Make sure that the input file is in the same directory as `FindAvailableEmployeeHours.php` before running the php file.
4. Run `FindAvailableEmployeeHours.php` in the command like like so:
```
  ~$ php FindAvailableEmployeeHours.php
```
5. Enjoy the output!

## Extra Credit
I built in the concept of company holidays on the default level. They will be evoked with the following string added to the input file
```
# company holidays
"01/01","04/01","11/11","12/25"
```
Employees hours for these days will update to 0 if `$to` to `$from` dates include those dates. 

## Extra Extra Credit
It currently takes around 2 seconds to process the example input file. This is less than ideal for larger file sizes. Here are some ideas for optimization:
1. Parallelizing the script.
2. Optimizing the script for the (undisclosed) use case. (i.e. removing features that were unused)
3. Store input data in pre-defined arrays, a database, or another persistance layer to skip over the processing expense involved in parsing.
4. Store the numerical day of week given a date with original input data to cut out manually calculating the day of week while processing the file.

There are trade offs to each of these of course. Parallelizing can require a lot of overhead if the design includes a queueing system and worker pools that aren't already in place, however, parallelizing can work incredibly well if those are in place. Using a relational database can work great, but also feel clunky to access and get unorganized if it's not well managed and utlized by multiple people. Predefined arrays require a code change on every edit and can get large enough, with enough sub arrays and related data that it can, at a certain threshold, seem worth it to move it into a different persistence layer. Storing the numerical day of week in the input data seems like a low hanging fruit for improving performance.  

## Unlisted Extra Credit
* Built out parsing of employee names. 

## Comments, Ideas
* Allowing for the idea of all dates from one date to current day could be potentially beneficial. Since the data would be generated from a static text file, we could have a fixed string like `current_date` for `$to` and then handing the rest of the logic in the function.
* If I had more time, I would make this a lot more readable and elegant. :)

## Future TODOs
* Utilize currently unutilized capture of employee names.
* Build output file with results over printing results to the console.
* Handle employee-specific participation in holidays.
* Handle non-fixed holidays.
