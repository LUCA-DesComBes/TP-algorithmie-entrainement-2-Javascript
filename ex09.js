function filtrerElevesReussis(obj) {
    return obj.filter((value) => value.age >= 10)
}

console.log(filtrerElevesReussis([{nom: "Alice", age: 15}, {nom: "Bob", age: 8}, {nom: "Charlie", age: 12}])); 
// Résultat attendu : [{nom: "Alice", age: 15}, {nom: "Charlie", age: 12}]