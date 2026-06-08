const animal = {
    nome: "Felps", //string
    especie: "Gatinho",
    idade: 7, //number
    tutor: false,
    vacinado: true
};

//console.log(animal);
console.log(animal.nome);
console.log(animal.tutor);

animal.idade = 6;
//console.log(animal);

console.log(`${animal.nome} é um ${animal.especie} com a idade ${animal.idade} e possui sua vacina em dia(${animal.vacinado})`);