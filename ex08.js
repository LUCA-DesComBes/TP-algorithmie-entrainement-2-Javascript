function ajouterPrefixe(tab) {
    let array = []
    for (let i = 0; i < tab.length; i++) {
        array.push(`M./Mme ${tab[i]}`);
    }
    return array
}

console.log(ajouterPrefixe(["Alice", "Bob"])); // Résultat attendu : ["M./Mme Alice", "M./Mme Bob"]