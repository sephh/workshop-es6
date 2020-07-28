# Destructing

É uma forma mais legível de pegar parte do valor de um objeto ou array.

Exemplo simples com objeto e array:

```
const myObject = {
    name: 'Picles',
    taste: 'delicioso',
    nested: {
        value: 'Eu sou uma prop nested'
    }
};

let {name, taste, nested: {value}} = myObject;

console.log(`${name}, ${taste}`); // log name e taste do myObject

console.log(value); // log value do objeto nested em myObject

const myArray = ['Picles', 'Gincobiloba'];

const [picles, gincobiloba] = myArray;

console.log(`Na minha lista tem ${picles} e ${gincobiloba}`); // loga os items no index 0 e 1, do myArray
```

Exemplo de alias

```
const mySecondObject = {
    name: 'Gincobiloba',
    taste: 'o gosto não é muito bom'
}

const {name: gincobilobaName, taste: gincobilobaTaste} = mySecondObject;

console.log(`${gincobilobaName}, ${gincobilobaTaste}`); // log os valores de name e taste, do mySecondObject
```

Exemplo do que não deve ser feito (ao menos eu não acho coisa de Deus)

```
const myObject = {
    name: 'Picles',
    taste: 'delicioso',
};

let {name, taste, nested: {value}} = myObject;

const evilVar = {name: 'OMG', taste: 'Deus é mais'};

({name, taste} = evilVar); // modifica os valores de name e taste, que foram desconstruidos de my object

console.log(`${name}, ${taste}`); // loga os valores de name e taste de evilVar
```

Execute o arquivo `destructing.js` e veja o resultado.