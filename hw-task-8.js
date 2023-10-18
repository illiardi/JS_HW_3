// for (let i = 0; i <= 20; i++) {
//   console.log("One iteration i =", i);
// }

// for (let y = 0; y <= 20; y = y + 2) {
//   console.log("Two iteration y =", y);
// }

// for (let x = 0;  x = y + i) {
//     console.log('Finally index x=' x)
// }

// Array;

const sheets1 = [144, 20, 1, 999, 100];

const sheets2 = [2, 15, 1010, 777, 8];

const newsheets = [];

for (let i = 0; i < sheets1.length; i++) {
  newsheets[i] = sheets1[i] + sheets2[i];
}

console.log("Results on new sheet =", newsheets);
