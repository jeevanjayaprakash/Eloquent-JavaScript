/**
 * FizzBuzz
 *
 * Jeevan Jayaprakash
 * jeevan.jayaprakash@cantab.net
 *
 * Implement FizzBuzz - Print the numbers from 1 to 100 and if divisible by 3, output Fizz, if divisible by 5, output Buzz and if divisible by both, output FizzBuzz. 
 */

 for(var i = 1; i < 101; i++) {
  if(i%3 == 0 & i%5 == 0) {
    console.log("FizzBuzz");
  } else if(i%3 == 0) {
    console.log("Fizz");
  } else if(i%5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
}
}