// Q1.1
// Destructuring assignment
// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// a; // => 2
// b; // => 1

// Q1.2
// Temporary variable
// let a = 1;
// let b = 2;
// let temp;

// temp = a;
// a = b;
// b = temp;

// a; // => 2
// b; // => 1

// Q2
// const str = "How are you doing today?";
// const res = str.split(" ");
// console.log(res);

// Q3
// let ​a​ = [​4​, ​5​, ​7​, ​-8​];
// console​.​log​(...​a​);

// Q4
// let Shop = ["T-Shirt", "Sweater", "Socks"];
// while(true) {
//     let n = prompt("Welcome to our shop, what do you want (C,R,U,D) or X if u exist?");
//     if (n == 'c' || n == 'C') {  // Create
//         let k = prompt("Enter new item: ");
//         Shop.push(k);
//         alert("Done");
//         console.log(Shop);
//     } else if (n == 'r' || n == 'R') { //Show array
//         alert(Shop);
//     } else if (n == 'u' || n == 'U') { // Update
//         let u = prompt("Update position? ");
//         if (u == 0) {
//             let r = prompt("New item?");
//             Shop[0] = r;
//             alert("Done");
//     } else if (u == 1) {
//             let r = prompt("New item?");
//             Shop[1] = r;
//             alert("Done");
//     } else if (u == 2) {
//             let r = prompt("New item?");
//             Shop[2] = r;
//             alert("Done");
//     } else if (u == 3) {
//             let r = prompt("New item?");
//             Shop[3] = r;
//             alert("Done");
//     } else if (n == 'c' || n == 'C') { //delete
//         if (u == 0) {
//             Shop.splice(0, 1);
//             alert("Done");
//         } else if (u == 1) {
//             Shop.splice(1, 1);
//             alert("Done");
//         } else if (u == 2) {
//             Shop.splice(2, 1);
//             alert("Done");
//         } else if (u == 3) {
//             Shop.splice(3, 1);
//             alert("Done");
//         }
//     }
//     else{
//         alert("This command is not supported");
//     }
// }
// }

// Q5
// let sum = 0;
// let n = prompt("Enter a squence of Numner, sequarated by commas(,)");
// let arr = n.split(",");
// // console.log(arr);
// for(let i = 0; i <arr.length; i++){ // length
//         sum += Number(arr[i]);
// }
// console.log(sum);

// Q6 c1
// let n = prompt("Enter a squence of Numner, sequarated by commas(,)");
// let arr = n.split(",");
// let min = arr[0];
// for(let i = 1; i < arr.length; i++){
//     if(min > arr[i]){
//         min = arr[i];
//         alert(`The smallest number is ${min}`);
//     }
// } cách này dag fix vì in ra 2 lần kết quả

// Q6 c2 
// let n = prompt("Enter a squence of Numner, sequarated by commas(,)");
// let arr = n.split(",");
// let min = arr[0];
// for(let i = 1; i < arr.length; i++){
//     if(min > arr[i]){
//         min = arr[i];
//         break; // Cái này sau khi tiềm ra dc
//     }
// }
// alert(`The smallest number is ${min}`);

// Q7
// const arr = [3,4,6,-9,10,-88,2];
// let n = prompt("Enter a number");
// for(let i = 0; i < arr.length; i++){
//     if(n == arr[i]){
//         alert(`${n} is FOUND in my array at index ${arr.indexOf(arr[i])}`);
//     }else{
//         alert{`${n} is NOT found in my array`};
//     }
// }

// Q8
// let arr = [5,7,300,90,24,50,75];
// console.log(`Hello, my name DatKhoaiTo and here is my sheep sizes:`);
// console.log(arr);
// let max = arr[0];
// for(let i = 1; i < arr.length; i++ ){
//     if(max < arr[i]){
//         max = arr[i];
//     }
// }
// console.log(`Now the biggest sheep has size ${max}, let's shave it`);

// console.log("After shearing here is my flock:");
// // IndexOf syntax n.indexOf(int ch, int fromIndex) //Trả về vị trị của giá trị Char đã cho tính từ vị trí fromIndex.

// let index = arr.indexOf(max);
// for(let i = 0; i < arr.length; i++){
//     if(i == index){
//         arr[i] = 8;
//     }
// }
// console.log(arr);
 
// // MONTH1
// console.log("Month1\nOne month has, passed, my sheeps have grown, here are their sizes:");
// for(let i = 0; i < arr.length; i++){
//     arr[i] += 50
// }
// console.log(arr);
// let max1 = arr[0];
// for(let i = 1; i < arr.length; i++ ){
//     if(max1 < arr[i]){
//         max1 = arr[i];
//     }
// }
// console.log("Now the biggest sheep has size " + max1+ ", let's shave it");
// console.log("After shearing here is my flock:");
// // IndexOf syntax n.indexOf(int ch, int fromIndex) //Trả về vị trị của giá trị Char đã cho tính từ vị trí fromIndex.
// let index1 = arr.indexOf(max1);
// for(let i = 0; i < arr.length; i++){
//     if(i == index1){
//         arr[i] = 8;
//     }
// }
// console.log(arr);

// //MONTH 2
// console.log("Month2\nOne month has, passed, my sheeps have grown, here are their sizes:");
// for(let i = 0; i < arr.length; i++){
//     arr[i] += 50
// }
// console.log(arr);
// let max2 = arr[0];
// for(let i = 1; i < arr.length; i++ ){
//     if(max2 < arr[i]){
//         max2 = arr[i];
//     }
// }
// console.log("Now the biggest sheep has size " + max2+ ", let's shave it");
// console.log("After shearing here is my flock:");
// // IndexOf syntax n.indexOf(int ch, int fromIndex) //Trả về vị trị của giá trị Char đã cho tính từ vị trí fromIndex.
// let index2 = arr.indexOf(max2);
// for(let i = 0; i < arr.length; i++){
//     if(i == index2){
//         arr[i] = 8;
//     }
// }
// console.log(arr);

// //MONTH 3
// console.log("Month2\nOne month has, passed, my sheeps have grown, here are their sizes:");
// for(let i = 0; i < arr.length; i++){
//     arr[i] += 50
// }
// console.log(arr);

// //Calculator
// let sum = 0;
// for(let i = 0; i < arr.length; i++){
//     sum += arr[i];
// }
// let m = sum * 2;
// console.log("My flock has size in total: " + sum);
// console.log("I would get "+sum+" * 2$ = " + m);

// Q9
// const a = ['red', 'gray', 'blue', 'purple', 'cyan'];
// let n = 100;
// for(let i = 1; i< a.length; i++){
//     color(a[i]);
//     fd(n);
//     rt(90);
//     fd(n);
//     rt(90);
//     fd(n);
//     rt(90);
//     fd(n);
//     rt(90);
//     n = n + 50;
// }

// Q10
// let n = prompt("Enter a squence of Name, sequarated by commas(,)");
// let arr = n.split(",");
// let arr1 = arr.map(x => `<${x}>`);
// alert(arr + "=>" + arr1);

// Q11
// let n = prompt("Enter a squence of Number, sequarated by commas(,)");
// let arr = n.split(",");
// const m = arr.filter(arr => arr.valueOf() % 2 != 0);
// alert(arr + "=>" + m);