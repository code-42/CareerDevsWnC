// version 5 - for loops
// i = 0                   // initialization
// Say 'hey' if i < 3      // condition
// increase i by 1         // final-expression

// for (initializatin, condition, final-expression){

for (var i=0; i < 3; i++){
    console.log("hey");
}

// code42:~/workspace/CareerDevsWnC (v5-loopsoflogic) $ node version5_loopsoflogic.js 
// hey
// hey
// hey
// code42:~/workspace/CareerDevsWnC (v5-loopsoflogic) $ 

// video 2 - looping over arrays
var testArray = ['item 1','item 2','item 3'];

for (var i=0; i < testArray.length; i++){
    // console.log(i);
    console.log(testArray[i]);
}


