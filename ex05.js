function printNumbers(num) {
    let result = "";
    for (let i = 1; i <= num; i++) {
        result += i;
        if (i < num) {
            result += ", " 
        }
    }
    console.log(result)
}

printNumbers(5); // Output attendu : 1, 2, 3, 4, 5