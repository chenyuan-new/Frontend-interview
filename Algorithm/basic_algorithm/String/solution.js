//Solution 1
// function reverseString(str){
//     return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
// }


//Solution 2
// function reverseString(str){
//     return str.match(/[\w']+/g).map(word => word.split('').reverse().join('')).join(' ')
// }




// let str = "Let's take LeetCode contest";
// console.log(reverseString(str));