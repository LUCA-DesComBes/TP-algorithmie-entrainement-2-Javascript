function isPalindrome(mot) {
    let wordReverse = "";
    for (let i = mot.length - 1; i >= 0; i--) {
        wordReverse += mot[i];
    }
    if (wordReverse === mot) {
        return true
    }
    return false
}

console.log(isPalindrome("radar")); // Output attendu : true