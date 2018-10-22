var array1= new Array(1,2,3,4,5); // Array 1: which contains the values of the first array.
var array2= new Array('a','b','c','d','f'); // Array 2: which contains the values of the second array.
var array3= new Array(); // Array 3: which contains the values of array1 and array2.
function cont (a1,a2) //combines two arrays into one.
{
for (i=0;i<array1.length;i++) //loop to move the values of array1 and array2 to array3.
{	
	array3.push(a1[i]); //move the value of array1 to array3.
	array3.push(a2[i]); //move the value of array2 to array3.
}
return array3; 
}
console.log(cont(array1,array2)); // to showout the values of array3 by console.
