/**
 * We're going to look at control statements and comparators
 * 
 * if statements deliniate a code block which is only executed 
 * IF the statement resolves to the boolean value true
 * 
 * Exercise: Given the code which already exists in this file
 * Make this print out the "Hello world". Do this however you want
 * the statement 1 > 2 is just a placeholder
 * 
 * Example:
 * if (ThisStatementIsTrue) {
 *     // Execute this code
 * }
 */


const makeMeEquateToTrue = 1 > 2

if (makeMeEquateToTrue) {
    console.log("Hello world")
}

/**
 * Comparators:
 * We use the standard array of maths comparators, these being
 * > Greater than
 * < Less than
 * <= Less than or equal to 
 * >= Greater than or equal to 
 * != Not equal to 
 * 
 * You will notice that equality is not mentioned above, in maths we would use = 
 * but we use that for assigining values to variables ... so to get around that we use ==
 * it is also possible to do comparissons using === but honestly that is rarely used
 * because it compares more than just the values, it also compares data types
 * 
 * Example:
 *   1 == "1" // this is true, they're both ... 1
 *   1 === "1" // this is false, because one of them is a string
 * 
 * There isn't many exercises I can give to get you used to this stuff, it 
 * is unfortunately one of those things
 * 
 * BUT we can look at else
 * 
 * We know
 * if (ThisStatementIsTrue) {
 *   // This code executes
 * }
 * 
 * but we also have this option
 * 
 * if (ThisStatementisFalse) {
 *   // This code doesn't execute
 * } else {
 *   // This code will now execute 
 * }
 * 
 * Exercise
 * Change the comparators used in the below control statements
 * so that the else blocks are executing
 */

let comparisonVariable = "Banana"
let numberComparator = 7

if (comparisonVariable = "FishSauce") {
    console.log("Oh no FishSauce is wrong")
} else {
    console.log("This is good")
}

if (numberComparator = 8) {
    console.log("Oh no 8 is wrong")
} else {
    console.log("This is good")
}