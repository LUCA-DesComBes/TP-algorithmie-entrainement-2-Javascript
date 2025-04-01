function printMultiples(num) {
    let result = "";
    for (let i = 1; i < num; i++) {
        if (i % 3 === 0) {
            result += i;
            if (i + 3 < num) {
                result += ", " 
            }
        } 
    }
    console.log(result)
}

printMultiples(10); // Output attendu : 3, 6, 9