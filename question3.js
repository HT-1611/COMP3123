function right(str) {
    if (str.length >= 3) {
        return str.slice(-3) + str.slice(0, -3);
    } else {
        return str;
    }
}

console.log(right("Python")); // Output: honPyt
console.log(right("JavaScript")); // Output: iptJavaScr
console.log(right("Hi")); // Output: Hi (no change since the string length is less than 3)