

// Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?

function findPairs (arr1, key){
    var pairs = []
    for(var i=0; i<arr1.length; i++){
        for(var j=0; j<arr1.length; j++){
            if((arr1[i] + arr1[j]) == key){
                pairs.push([arr1[i],arr1[j]])
            }
        }
    }
    return pairs;
}

var arr1 = [9,6,10,4,7,7,8,6]
var key = 14
console.log(findPairs(arr1,key))


//Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array. 

function reverseArray(arr2){
    var i=0
    var j=arr2.length-1
    var temp
    while(i < j){
        temp = arr2[i]
        arr2[i] = arr2[j]
        arr2[j] = temp
        i++
        j--
    }
    return arr2
}

var arr2 = [1,2,3,4,5,6,7]
console.log(reverseArray(arr2))


// Q3. Write a program to check if two strings are a rotation of each other?

function isRotation(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const temp = str1 + str1;
    return temp.includes(str2);
}

var str1 = "abcd";
var str2 = "cdab";
console.log(isRotation(str1, str2));


// Q4. write a program to print the first non-repeated character from a string? 

function firstNonRepeatedChar(str4){
    var arr4 = str4.split('');
    var result = '';
    var repeted = 0;
   
    for (var i=0; i<arr4.length; i++) {
        ctr = 0;
        for (var j=0; j<arr4.length; j++){
            if (arr4[i] === arr4[j]) {
                repeted += 1;
            }
        }
        if (repeted < 2) {
            result = arr4[i];
            break;
        }
    }
    return result;
}

var str4 = 'abbaaccgde'
var index = -1
console.log(firstNonRepeatedChar(str4))


// Q5. read about the tower of hanoi algorithm. write a program to implement it.

function towerOfHanoi(n, source, destination, auxiliary) {
    if (n > 0) {
        towerOfHanoi(n - 1, source, auxiliary, destination);
        console.log(`Move disk ${n} from ${source} to ${destination}`);
        towerOfHanoi(n - 1, auxiliary, destination, source);
    }
}


var n = 3;
towerOfHanoi(n, 'A', 'B', 'C');


// Q6. read about infix, prefix, and postfix expressions. write a program to convert postfix to prefix expression.

function isOperator(x) {
    switch (x) {
        case '+':
        case '-':
        case '/':
        case '*':
            return true;
    }
    return false;
}

function postToPre(postExp) {
    let s = [];
    let length = postExp.length;
    for (let i = 0; i < length; i++) {
        if (isOperator(postExp[i])) {
            let op1 = s.pop();
            let op2 = s.pop();
            let temp = postExp[i] + op2 + op1;
            s.push(temp);
        } else {
            s.push(postExp[i]);
        }
    }
    let ans = "";
    while (s.length > 0) {
        ans += s.pop();
    }
    return ans;
}

let postExp = "A+B*C+D";
console.log("Prefix: " + postToPre(postExp));

// Q7. write a program to convert prefix expression to infix expression.

function isOperator(x){
    switch(x){
        case '+':
        case '-':
        case '*':
        case '/':
        case '^':
        case '%':
            return true;
    }
    return false;
}

function convert(str7){
    let stack7 = [];
    let l = str7.length;
    for(let i = l - 1; i >= 0; i--){
        let c = str7[i];
        if (isOperator(c)){
            let op1 = stack7[stack7.length - 1];
            stack7.pop()
            let op2 = stack7[stack7.length - 1];
            stack7.pop()
            let temp = "(" + op1 + c + op2 + ")";
            stack7.push(temp);
        }
        else{
            stack7.push(c + "");
        }
    }
    return stack7[stack7.length - 1];
}
 
let exp = "*-A/BC-/AKL";
  
console.log("Infix : " + convert(exp));


// Q8. write a program to check if all the brackets are closed in a given code snippet. 

function checkBrackets(expression) {
    let leftArr = [];
    let rightArr = [];
    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === '(' || expression[i] === '[' || expression[i] === '{') {
            leftArr.push(expression[i]);
        }
        if (expression[i] === ')') {
            rightArr.push('(');
        } else if (expression[i] === '}') {
            rightArr.push('{');
        } else if (expression[i] === ']') {
            rightArr.push('[');
        }
    }
    rightArr.reverse();
    if (leftArr.length < rightArr.length || leftArr.length > rightArr.length) {
        return false;
    }
    for (let k = 0; k < leftArr.length; k++) {
        if (leftArr[k] != rightArr[k]) {
            return false;
        }
    }
    return true;
  }
  
  console.log(checkBrackets('[{()}]')); 
  


// Q9. write a program to reverse a stack

function insertAtBottom(stack9, item) {
    if (stack9.length === 0) {
        stack9.push(item);
    } else {
        const temp = stack9.pop();
        insertAtBottom(stack9, item);
        stack9.push(temp);
    }
}

function reverseStack(stack9) {
    if (stack9.length > 0) {
        const item = stack9.pop();
        reverseStack(stack9);
        insertAtBottom(stack9, item);
    }
}

const stack9 = [1, 2, 3, 4];
console.log("Original Stack:", stack9);
reverseStack(stack9);
console.log("Reversed Stack:", stack9);
    

// Q10. write a program to find the smallest number using a stack.

function findSmallestNumber(stack) {
    let smallest = Infinity;
    while (!stack.isEmpty()) {
        const item = stack.pop();
        if (item < smallest) {
            smallest = item;
        }
    }
    return smallest;
}