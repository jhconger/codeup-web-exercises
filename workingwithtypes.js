/*
var a = 1;
var b = a++;
var c = ++a;
//3
//1
//3
console.log(a)
console.log(b)
console.log(c)

var d = "hello";
var e = false;
d++;
e++;
//false
//NaN, actually 1
console.log(d++);
console.log(e++);

var perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;
//NaN
console.log(perplexed +2);

var price = 2.7;
price.toFixed(2);
//2.70
console.log(price.toFixed(2));

var price = "2.7";
price.toFixed(2);
//2.7.00, not a function
console.log(price.toFixed(2));
*/

isNaN(0)
//false
console.log(isNaN(0));

isNaN(1)
//false
console.log(isNaN(1));

isNaN("")
//true, actually false
console.log(isNaN(""))

isNaN("string")
//true
console.log(isNaN("string"))

isNaN("0")
//false
console.log(isNaN("0"))

isNaN("1")
//false
console.log(isNaN("1"))


isNaN("3.145")
//false
console.log(isNaN("3.145"))

isNaN(Number.MAX_VALUE)
//false
console.log(isNaN(Number.MAX_VALUE))

isNaN(Infinity)
//false
console.log(isNaN(Infinity))


isNaN("true")
//true
console.log(isNaN("true"))

isNaN(true)
//false
console.log(isNaN(true))

isNaN("false")
//true
console.log(isNaN("false"))

isNaN(false)
//false
console.log(isNaN(false))

// to illustrate why the isNaN() function is needed:
NaN == NaN

!true
//false
console.log(!true)

!false
//true
console.log(!false)

!!true
//true
console.log(!!true)

!!false
//true, actually false
console.log(!!false)

!!0
//false
console.log(!!0)

!!-0
//false
console.log(!!-0)

!!1
//true
console.log(!!1)

!!-1
//false, actually true
console.log(!!-1)

!!0.1
//true
console.log(!!0.1)

!!"hello"
//true
console.log(!!"hello")

!!""
//true, actually false
console.log(!!"")

!!''
//false
console.log(!!'')

!!"false"
//true
console.log(!!"false")

!!"0"
//false, actually true
console.log(!!"0")
