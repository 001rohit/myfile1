// #1 function Expression

function myFunc(){
    console.log('hellow')
}
// myFunc()

//  #2 return function 
   function myReturn(value){
    return value;
   }
  let res =  myReturn("Hellow my name is rohit")
  console.log(res)

// #3  function with default parameter
function myDefault(a,b=2){
      return a+b;
}
var res1 = myDefault(15)
console.log(res1)

// #4 arrow function 
const arrow = (a,b) => a+b 
console.log(arrow(50,10));

// #5 function with Rest Parameters

function Rest(...argu){
    let sum = 0;
    for(let i = 0 ; i<argu.length;i++){
        sum+=argu[i];
    }
    return sum;
}
console.log(Rest(2,4,6,10))
let res2 = Rest(2,4,6,8)
console.log(res2);

// #6 Function with Spread Operator

function spread(a,b,c,d,e){
    return a+b+c+d+e;
}
var arr = [1,2,3,4,5]
var res3 = spread(...arr)
console.log(res3)

// #7 function with Callback
function greet(callback){
    callback();
}
function myCallFun(){
    console.log("This is call function");
}
greet(myCallFun);


// Question:-1 Function for check a number is prime or not

check_prime = (num) =>{
    if(num<=1){
        return 0;
    }
    for(let i = 2 ;i<num ; i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}
let a = 23;
let res5 = check_prime(a);
if(res5){
    console.log("\n Given number is prime");
}
else{
    console.log("\n Given number is not prime");
}

// Question:-2 Function for check a number is palindrome or not

check_palindrome = (num)=>{
    let rev = 0;
    let temp = num;
    while(num!=0){
        let rem = num%10
        rev = rev *10 + rem
        num = Math.floor(num/10);
    }
    return rev == temp;
}
let res4 = check_palindrome(102);
console.log(res4);
if(res4){
    console.log("\n Given number is polindrome");
}
else{
    console.log("\n Given number is not palindrome");
}
