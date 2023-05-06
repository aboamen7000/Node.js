// Looping and Process, argv

// Looping
const list = [1,2,3,4,5,6,7,8,9,10];

console.log(list[0]); // 1
console.log(list[1]); // 2

console.log("\nFor Loop\n");

// for loop
for (var i = 0; i < list.length; i++) {
  console.log(list[i]);
}

console.log("\nFor Each\n");
// for each
for (var i in list) {
  console.log(list[i]);
}
////////////////
console.log("\nProcess, argv\n");

// Process, argv
// excution : node test.js IA Ahmad ALi Omar Abdo
const args = process.argv.slice(2); // IA Ahmad ALi Omar Abdo
// for each
for (let name of args) {
  console.log(`Hi, ${name}`);
}