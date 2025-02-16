// ----------------------------------------fn----------------------------------------------------

// Using a for loop
for (let i = 0; i < 5; i++) {
    console.log("For Loop:", i);
}

// Using a while loop
let j = 0;
while (j < 5) {
    console.log("While Loop:", j);
    j++;
}

// Using a do-while loop
let k = 0;
do {
    console.log("Do-While Loop:", k);
    k++;
} while (k < 5);

// Using a forEach loop (for arrays)
const arr = [10, 20, 30, 40, 50];
arr.forEach((value, index) => {
    console.log(`ForEach Loop: Index ${index}, Value ${value}`);
});

// Using a for...of loop
for (let num of arr) {
    console.log("For...of Loop:", num);
}

// Using a for...in loop (for objects)
const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log(`For...in Loop: Key ${key}, Value ${obj[key]}`);
}
