{
    var exemploVar =
        "Tem escopo de função ou global, permite reatribuição e redeclaração.";
    let exemploLet =
        "Tem escopo de bloco, permite reatribuição, mas não redeclaração.";
    const exemploConst =
        "Tem escopo de bloco, não permite reatribuição nem redeclaração.";

    console.log(exemploConst); //so imprime porque está dentro do escopo em que foi declearada.
    console.log(exemploLet); // so imprime porque está dentro do escopo em que foi declearada.
}
console.log(exemploVar + "aqui está fora do escopo");
//---------------------------------------//------------------------------------//

console.log(19.9 * 0.6);

let preco = 19.9;
let desconto = 0.4;
let precoComDesconto = preco * (1 - desconto);
console.log(precoComDesconto);

let nome = "Caderno";
let categoria = "Papelaria";
console.log("Produto: " + nome + ", Categoria: " + categoria);
