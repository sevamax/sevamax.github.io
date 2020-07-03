
// var x = 0;
// for (let index = 0; index < 12; index++) {
    
    

//     var fx = 3*(x*x*x) + 3*x - 1;

    

//     x = 1 - 5 * ((1-x)/ (5- fx));

//     console.log('fx = '+ fx +'   x = ' +x);

// }
var x = 0;
for (let index = 0; index < 13; index++) {
    
    var n1 = 3;
    var n2 = 3;
    
    var fx = n1 * (x**3) + n2 * x - 1;
    var fb = n1 + n2 - 1;
    console.log('x' + index + ' = ' + x );
    x = 1 - fb * ((1-x)/ (fb - fx));

    console.log('fx' + index +  ' = ' + fx);

}