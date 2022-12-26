// // // setTimeout(() => console.log('timer1 expired'), 1000)



// // // setTimeout(() => console.log('timer2 expired'), 0)



// // // function x(y) {

// // // console.log('inside x');

// // // y();

// // // }



// // // x(function y(){

// // // setTimeout(() => console.log('inside y'), 0)

// // // })


// // setTimeout(() => console.log('timer1 expired'), 1000)



// // setTimeout(() => console.log('timer2 expired'), 0)



// // function x(y) {

// // console.log('inside x');

// // y();

// // }



// // x(function y(){

// // console.log('inside y')

// // })

// setTimeout(() => console.log('timer expired'), 1000)



// function x(y) {

// console.log('inside x');

// y();

// }



// x(function y(){

// console.log('inside y')

// })

document.getElementById("click").
addEventListener ("click",function(){
    console.log("clicked me")
})


addEventListener ('DOMContentLoaded',function(){
    console.log("DOM has loaded",count)
})
