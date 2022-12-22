// 1. Exo 1 Boucles FOR
//     - Creer une variable de type array et inserez toutes les personnes de la classe
//     - A l'aide d'une boucle for, dites `bonjour + prenom` à chaque personne du tableau
let classMol = [`Denis`, `Bachir`, `Brandon`, `Charlotte`, `Enide`, `Idrisse`, `Mohamed`, `Quentin`, `Shahin`, `Victor`, `Fadia`, `Vitor`, `Sebastian`, `Laurent`, `Yassine`, `Adil`];
    for(let i = 0; i < classMol.length; i++) {
        console.log(`Bonjour ${classMol[i]}`);
    }

/*
Test 2D
for(i = 0; i < dynamicArr.length; i++) {
    for(j = 0; j < dynamicArr[i].length; j++) {
        // do something here..
    }
}
*/

// 2. Exo 2 Boucles FOR (let)
//     - Dans un prompt inserer un nombre 
//     - A l'aide d'une boucle for, affichez les nombres de 0 jusqu'au nombre que vous avez choisi.
let user = prompt (`Choisir un nombre`);
    for (i = 0; i < user; i++) {
    console.log(i);
}

// 3. Exo 3 Boucles FOREACH
//      - Creer une varaible de type array et inserez toutes les personnes de la classe
//      - A l'aide d'une boucle foreach, dites bonjour + prenom à chaque personne du tableau
let classMol2 = [`Denis`, `Bachir`, `Brandon`, `Charlotte`, `Enide`, `Idrisse`, `Mohamed`, `Quentin`, `Shahin`, `Victor`, `Fadia`, `Vitor`, `Sebastian`, `Laurent`, `Yassine`, `Adil`];
    classMol2.forEach(element => {
        console.log(`Bonjour ${element}`);
    });
    


let tableau = [`oranges`, `grapefruits`, `mandarins`, `limes`, `yes`,`strawberries`, `raspberries`, `blueberries`, `no`, `mandarinas`];
tableau.forEach(element => {
    if (element.length>3){
    console.log(element);
    };
});

// 4. Exo 4 Boucle FOREACH
//     - Créez un un array qui contient 5 éléments
//     - Affichez touts les éléments a l'aide d'une boucle foreach
const fruits = ["Kiwi", "Orange", "Apple", "Mango"];
    for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
    }

let array1 = [`oranges`, `grapefruits`, `mandarins`, `limes`, `yes`];
    array1.forEach(element => {
        console.log(element);
    });