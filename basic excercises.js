// Basic Exercise 1
/* Create a program that according to the temperature will provide you with the information, whether the weather is cold or moderate. This program should generate a different random number every time, that should be between -5c and 25c. If the temperature is between -5c and 10c print "The weather is cold" otherwise print "The weather is moderate".*/

var temperature = Math.floor((Math.random() * 40)-5);
//document.write(temperature);

if (temperature <= 10){
    document.write("It is "+ temperature+ " Degrees! The weather is cold! <br><img src='ice.jpg' alt='' style='width:50%'> <br>")

} else if (10 < temperature && temperature < 32) {
    document.write("It is "+ temperature+ " Degrees! The weather is moderate! <br><img src='tree.jpg' alt='' style='width:50%'><br>")
} else {
    document.write("It is "+ temperature+ " Degrees! The weather is hot! <br><img src='forest-fire.jpg' alt='' style='width:50%'><br>")
}

//Basic Exercise 2
/* Create a program to find the highest value in an array. E.g. If we have the following values 1, 7, -3, 9 we should only get the highest value, number 9. */

array = [77,1,777,-3,9];
var maxValue = array[0];
for (i=0; i<array.length; i++){
    if (maxValue < array[i]){
        maxValue = array[i]
    }
}
console.log(maxValue);

// Intermediate One:
var grade = [76, 85, 65, 93, 81,100]
var students = ["Martin", "Thomas", "Klaus", "Maria", "David","Robert"]
for (var i = 0; i < grade.length; i++)
{
	//console.log(grade[i] + students[i]);

	if (grade[i]<60){
		document.write(students[i] + ", your grade is F! <br>")
	} else if(grade[i] <70) /*&& grade[i]<=60)*/{
		document.write(students[i] + ", your grade is D! <br>")

	} else if(grade[i] <80) /*&& grade[i]<=70)*/{
		document.write(students[i] + ", your grade is C! <br>")

	} else if(grade[i] <90) /*&& grade[i]<=80)*/{
		document.write(students[i] +", your grade is B! <br>")

	} else if(grade[i] <=100)/*&& grade[i]<=90)*/{
		document.write(students[i] +", your grade is A! <br>")

	}

} 

var sum = 0;
for (var i = 0; i < grade.length; i++){
	sum += grade[i];
}
//console.log(sum / grade.length)
document.write("The average grade is " + sum/grade.length)






