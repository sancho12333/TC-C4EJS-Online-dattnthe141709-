//Q1 Create
// let Cauthu = ["Ronaldo","Messi","Neymar"];
// let n = prompt('Do you add more player footballs??- Y/N');
// if(n == 'Y'){
//     let u = prompt("What's your name player,you want?");
//     Cauthu.push(u);
//     alert(Cauthu);
// }else if(n == 'N'){
//     alert('Goodbye!!');
// }else{
//     alert('Pls only choose Y or N');
// }


// Q2.1 Read
// let HangXe = ["Honda", "Suzuki", "Yamaha", "Kawasaki", "Ducati", "Triumph"];
// let n = HangXe[5];
// console.log(n)
// console.log(HangXe[4]);

// Q2.2 Read
//  let HangXe = ["Audi", "Bentley", "BMW", "Bugatti", "Ferrari", "Ford"];
//  for(let i = 0; i< HangXe.length; i++){
//      console.log(HangXe[i]);
//  }

//Q3 Update
// let Cauthu = ["Ronaldo","Messi","Neymar"];
// let n = prompt('Do you add more player footballs??- Y/N');
// if(n == 'Y' || n == 'y'){
//     let u = prompt("What's index you want change?");
//     if(u == 0){
//         let r = prompt("What's name your want change?");
//         Cauthu[0] = r;
//         alert(Cauthu);
//     } else if(u == 1){
//         let r = prompt("What's name your want change?");
//         Cauthu[1] = r;
//         alert(Cauthu); 
//     }else if(u == 2){
//         let r = prompt("What's name your want change?");
//         Cauthu[1] = r;
//         alert(Cauthu);
//     } 
// } else if(n == 'N' || n == 'n'){
//     alert('Goodbye!!');
// } else{
//     alert("Pls only chooses Y or N !!!");
// }

//Q4 Delete
// let Cauthu = ["Ronaldo","Messi","Neymar"];
// let n = prompt('Do you add more player footballs??- Y/N');
// if(n == 'Y' || n == 'y'){
//     let u = prompt("What's index you want delete?");
//     if(u == 0){
//         Cauthu.splice(0,1);
//         alert(Cauthu);
//     } else if(u == 1){
//         Cauthu.splice(1,1);
//         alert(Cauthu); 
//     }else if(u == 2){
//         Cauthu.splice(2,1);
//         alert(Cauthu);
//     } 
// } else if(n == 'N' || n == 'n'){
//     alert('Goodbye!!');
// } else{
//     alert("Pls only chooses Y or N !!!");
// }
while(true){
let Shop = ["T-Shirt", "Sweater"];
let n = prompt("Welcome to our shop, what do you want (C,R,U,D) or X if u exist?");
if(n == 'c' || n == 'C'){  // Create
    let k = prompt("Enter new item: ");
    Shop.push(k);
    alert(Shop);
} 
else if(n == 'r' || n == 'R'){ //Show array
    alert(Shop);
}
else if(n == 'u' || n == 'U'){ // Update
    let u = prompt("Update position? ");
    if(u == 0){
        let r = prompt("New item?");
        Shop[0] = r;
        alert(Shop);
    } else if(u == 1){
        let r = prompt("New item?");
        Shop[1] = r;
        alert(Shop); 
    }else if(u == 2){
        let r = prompt("New item?");
        Shop[1] = r;
        alert(Shop);
    }
} 
else if(n == 'c' || n == 'C'){ //delete
    if(u == 0){
        Shop.splice(0,1);
        alert(Shop);
    } else if(u == 1){
        Shop.splice(1,1);
        alert(Shop); 
    }else if(u == 2){
        Shop.splice(2,1);
        alert(Shop);
    }   
}
else if(n == 'X' || n == 'x'){
    break;
}
}