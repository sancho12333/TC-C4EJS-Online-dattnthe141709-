// let i = 0;
// while(i < 7){
//     console.log(i);
//     i++;
    
// }
// Q3.1

// let i = 0;
// let n = Number(prompt("Enter a number?"));
// while(i < n){
//     console.log(i);
//     i++;
    
// }
// Q3.2

// let i = 3;
// let n = Number(prompt("Enter a number?"));
// while(i < n){
//     console.log(i);
//     i++;
    
// }
// Q3.3

// let n = Number(prompt("Enter n"));
// let i = Number(prompt("Enter c"));
// while(i < n){
//     console.log(i);
//     i++;
// }
// Q3.4

// let n = Number(prompt("Enter n"));
// let x = Number(prompt("Enter c"));
// while(x<n){
//     console.log(x);
//     x+=3;
// }
// Q3.5

// let n = Number(prompt("Enter n"));
// let x = Number(prompt("Enter c"));
// let z = Number(prompt("Enter z"));
// while(x<n){
//     console.log(x);
//     x+=z;
// }
//Q3.6

// let x = Number(prompt("How old are u??"));
// if(x <= 14){
//     console.log("You are not old enough to view this content!!");
// }else{
//     console.log("Enjoy!!");
// }
// Q4

// let x = Number(prompt("Enter number: "));
// if(x <= 4.5){
//     console.log("Lower half of 9");
// }else{
//     console.log("High half of 9");
// }
// Q5

// let n = Number(prompt("Enter n"));
// let x = Number(prompt("Enter x"));
// if(n < x){
//     alert(`${n} is in lower half of ${x}`);
// }else{
//     alert(`${x} is in lower half of ${n}`);
// }
// Q6

// let n = Number(prompt("Enter n"));
// if(n%2==0){
//     alert(`${n} is an even number`);
// }else{
//     alert(`${n} is an odd number`);
// }
// Q7

// let i = 0;
// while(i<2){
//     console.log(6/2 + "L");
//     if(i = 1){
//       console.log(6/2 + "H");
//     }
//     i++;
// }
// Q8.1


// let i = 0;
// let n = Number(prompt("Enter the total number of L's and H's?"));
// while(i < 2){
//     if(n%2 != 0){
//         console.log(Math.ceil(n/2) + "L");
//         if(i = 1){
//             console.log(Math.floor(n/2) + "H");
//         }
//     }else{
//         console.log(n/2 + "L");
//         if(i = 1){
//             console.log(n/2 + "H");
//         }
//     }
//     i++;
// }
// Bài này em định làm gộp câu 8.1 vs 8.2 thành một câu luôn ạ

// let i = 0;
// let n = 8;
// while(i<n){
//     if(i%2 != 0){
//         console.log("1");
//     }else{
//         console.log("0");
//     }
//     i++;
// }
// Q8.3

// let i = 0;
// let n = Number(prompt("Enter n"));
// while(i<n){
//     if(i%2 != 0){
//         console.log("1");
//     }else{
//         console.log("0");
//     }
//     i++;
// }
// Q8.4

// let i = 0;
// let n = Number(prompt("Enter kg"));
// let m = Number(prompt("Enter cm")) / 100;
// let BMI = n/(m*m);

//     alert(`Your BMI is ${BMI.toFixed(1)}`);
//     if(BMI < 16){
//         alert("Severely underweight");
//     } else if(BMI > 16 && BMI<18.5){
//         alert("Underweight");
//     } else if(BMI > 18 && BMI < 25){
//         alert("Normal");
//     } else if(BMI > 25 && BMI < 30){
//         alert("Overweight ");
//     } else if(BMI > 30){
//         alert("Obese");
//     }
//Cái phần em chịu ko lấy đúng như trong ảnh anh ạ BMI KQ 
// em ra 26.9 ko giong trong anh phai la 26.8 :(
//Q9

// setshape("rocket-large");
// clear();
// let i = 0;
// while(i<4){
//     fd(100);
//     rt(360/4)
//     i++
// }
// 10.1

// setshape("rocket-large");
// clear();
// let i = 0;
// while(i<3){
//     fd(100);
//     rt(360/3)
//     i++
// }
// 10.2

// setshape("rocket-large");
// clear();
// let i = 0;
// while(i<5){
//     fd(100);
//     rt(360/5)
//     i++
// }
// 10.3

// setshape("rocket-large");
// clear();
// let i = 0;
// while(i<6){
//     fd(100);
//     rt(360/6)
//     i++
// }
// Q10.4

// setshape("rocket-large");
// clear();
// let i = 0;
// let n = Number(prompt("Enter numer page of edges"));
// while(i<n){
//     fd(100);
//     rt(360/n);
//   	if(n > 360){
//       fd(1);
//       rt(360/n)
//     }
//     i++
// }
// Q11

// setshape("rocket-large");
// clear();
// let i;
// let j;
// let k = 3;
// let n = Number(prompt("Enter numer page of edges"));
// for(i = 0; i <= n; i++){
//     for(j = 0; j <= n; j++){
//        fd(100); 
//        rt(360/k); 
//     }
//   k++;
// }
// Q12 dag sữa ạ