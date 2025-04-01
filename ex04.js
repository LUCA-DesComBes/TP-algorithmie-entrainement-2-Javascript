function reverseString(mot) {
    let word = "";
    for (let i = mot.length - 1; i >= 0; i--) {
        word += mot[i];
    }
    return word
}

console.log(reverseString("hello")); // Output attendu : "olleh"