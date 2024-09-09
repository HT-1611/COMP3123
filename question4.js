function angle_Type(angle) {
    if (angle > 0 && angle < 90) {
        return "Acute angle";
    } else if (angle === 90) {
        return "Right angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    } else if (angle === 180) {
        return "Straight angle";
    }
}

console.log(angle_Type(47)); // Output: Acute angle
console.log(angle_Type(90)); // Output: Right angle
console.log(angle_Type(145)); // Output: Obtuse angle
console.log(angle_Type(180)); // Output: Straight angle