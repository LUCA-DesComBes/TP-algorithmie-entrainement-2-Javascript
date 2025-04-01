function genererDescriptions(obj) {
    let array = [];
    for (let i = 0; i < obj.length; i++) {
        let names = `${obj[i].nom} a ${obj[i].age} ans.`
        array.push(names);
    }
    return array;
}

console.log(genererDescriptions([{nom: "Alice", age: 25}, {nom: "Bob", age: 30}])); 
// Résultat attendu : ["Alice a 25 ans.", "Bob a 30 ans."]