// Basic Exercise 1
/* Create a program that according to the temperature will provide you with the information, whether the weather is cold or moderate. This program should generate a different random number every time, that should be between -5c and 25c. If the temperature is between -5c and 10c print "The weather is cold" otherwise print "The weather is moderate".*/

var temperature = Math.floor((Math.random() * 40)-5);
//document.write(temperature);

if (temperature <= 10){
    document.write("It is "+ temperature+ " Degrees! The weather is cold! <br><img src='ice.jpg' alt='' style='width:50%'>")

} else if (10 < temperature && temperature < 32) {
    document.write("It is "+ temperature+ " Degrees! The weather is moderate! <br><img src='tree.jpg' alt='' style='width:50%'> ")
} else {
    document.write("It is "+ temperature+ " Degrees! The weather is hot! <br><img src='forest-fire.jpg' alt='' style='width:50%'>")
}

//Basic Exercise 2
/* Create a program to find the highest value in an array. E.g. If we have the following values 1, 7, -3, 9 we should only get the highest value, number 9. */
