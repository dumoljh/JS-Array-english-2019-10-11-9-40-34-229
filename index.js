// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];

	if (a.constructor === Array) {
	console.log("var a is an Array")
		}
	else if (b.constructor === Array) {
		console.log("var b is an Array")
	} 
	else if (b.constructor === Array && a.constructor === Array) {
		console.log("either is an Array")
	} 
	else {
		console.log("neither are Array")
	}

 

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
var product = 1;

for (i = 0; i < a.length; i += 1) {
  	 product *= a[i];
    }
	console.log("Product:  " +product);

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];

switch (colors[0]) {
	case "Red":
	console.log("'"+colors.join(' ')+"'")
	case 2:
    console.log("'"+colors.join('+')+"'")
    case 3:
    console.log("'"+colors.toString()+"'")
    break;
  	default:
    console.log("No Colors")
}
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];

a.sort(function(a, b) {
  return a - b;
});

console.log(a);
//TODO should output: [10,8,5,4,1]


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var b = 1;
var c = 0;
var mostFrequent;

	for (var i=0; i<a.length; i++)
	{
        for (var j=i; j<a.length; j++)
        {
                if (a[i] == a[j])
                 c++;
                if (b<c)
                {
                  b=c; 
                  mostFrequent = a[i];
                }
        }
        c=0;
	}
console.log(mostFrequent) ;
//TODO should output: 'a'