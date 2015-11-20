

var num = parseInt(prompt("write a number between 1 & 100. "))

function fizzbuzz(x) {
     
	for (var i = 0; i < x; i++){
		if (i % 3 == 0 && i % 5 == 0){
	        document.write("fizzbuzz<br/>")
	        }
		          else if (i % 5 == 0){
		          	document.write("buzz<br/>")
		          }
		          	else if (i % 3 == 0){ 
					   document.write("fizz<br/>")
				    }
					 else { 
						 document.write(i+"<br/>")
					 }
		}
}

fizzbuzz(num)






// var greet_user = function() {
//      var name = prompt("whats your name?")
       
//        if (name == "victor") {
// 		console.log(" hello your royal hyness: " + name)
// 	   }
// 	   else {
// 	   	console.log(" hello " + name)
// 	   }
// }

// greet_user()

// // functions that call themselves (self running e.g (analytics,log in session))

// (function() {

// 	for (var i = 0; i < 100; i++){
// 		if (i % 3 == 0 && i % 5 == 0){
// 	        console.log("fizzbuzz")
// 	          	}
// 	          else if (i % 5 == 0){
// 	          	console.log("buzz")
// 	          }
// 	          	else if (i % 3 == 0){ 
// 				   console.log("fizz")
// 			}
// 				 else { 
// 					 console.log(i)
// 				}
// 		}
// })();



// function fizzbuzzer(max) {
  
//   function check(n) {
//   var msg = '';
//     if ( n % 3 == 0 ) { msg += "Fizz" };
//     if ( n % 5 == 0 ) { msg += "Buzz" };
//     return msg || n;
//   }

//   for (var i = 1; i <= max; i++) {
//     console.log(check(i));
//   }

// }

// fizzbuzzer(15);