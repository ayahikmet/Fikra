var digitFormNumber=[1,9,5,7,10]; // An array contains digit numbers.
var wordsFormNumber=[]; // array of numbers in written form.
for(i=0;i<digitFormNumber.length;i++) 
{
switch(digitFormNumber[i]) //check the digit numbers to change them to the written form.
 {
case 0:
	wordsFormNumber[i]="zero"
	break;	
case 1:
	wordsFormNumber[i]="one"
	break;
case 2:
	wordsFormNumber[i]="two"
	break;
case 3:
	wordsFormNumber[i]="three"
	break;
case 4:
	wordsFormNumber[i]="four"
	break;
case 5:
	wordsFormNumber[i]="five"
	break;
case 6:
	wordsFormNumber[i]="six"
	break;
case 7:
	wordsFormNumber[i]="seven"
	break;
case 8:
	wordsFormNumber[i]="eight"
	break;
case 9:
	wordsFormNumber[i]="nine"
	break;
case 10:
	wordsFormNumber[i]="ten"
	break;

default :
console.log("default case"); 
break;
}
}
console.log(wordsFormNumber); ////showout the written form into the console
