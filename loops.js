//1. for loop
// for (intilization; condition;increment/decrement)
//0 1 2 3 4 5 6 7 8 9
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log("exit");

//9 8 7 6 5 4 3 2 1 0
for (let i = 10; i > 0; i--) {
  console.log(i);
}
console.log("exit");

for (let z = 0; z <= 6; z++) {
  console.log("*".repeat(z));
}

//while loop
//while(condition)
//code to be executed
//increment/decrement
let i = 0;
console.log("start");
while (i < 10) {
  console.log(i);
  console.log("continue");
  i++;
}
console.log("end");

//4.break: used to stop the loop
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}
console.log("exit");
//5.continue statement: skip the current iteration
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    console.log("${i} is skipped");
    continue;
  }
  console.log(i);
}
console.log("exit");
