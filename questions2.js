// Given two strings, checl to see if the first letter in string a is the previous alhabetical letter to string b

// Example a = 'agt' and b = 'bhu'
//z will loop back to a 

//Given an array of numbers, the first element will go to array 1, the second to array 2. for the
//3rd element and forward, the array that has the most numbers greater than that element will take it, if the 
//numbers match, the shorter array gets it, if they are the same size, the first array gets it. 
//return the two arrays in a single array, 1 then 2

//Example [5,7,6,9,2,4]
// arr1[0] = 5
//arr2[0] = 7
// arr1 has 0 numbers greater than 6
//arr2 has 1 number greater than 6, so arr2 = [7,6]
//the nextr element is 9
//neither arrays have elements larger than 9, so they both have 0. So the shorter array takes 9
//arr1[5,9]
//aar2[7,6]