const myObject = {
    name: 'Picles',
    taste: 'delicioso',
    nested: {
        value: 'Eu sou uma prop nested'
    }
};

let {name, taste, nested: {value}} = myObject;

console.log(`${name}, ${taste}`);

console.log(value);

const myArray = ['Picles', 'Gincobiloba'];

const [picles, gincobiloba] = myArray;

console.log(`Na minha lista tem ${picles} e ${gincobiloba}`);

const mySecondObject = {
    name: 'Gincobiloba',
    taste: 'o gosto não é muito bom'
}

// Alias
const {name: gincobilobaName, taste: gincobilobaTaste} = mySecondObject;

console.log(`${gincobilobaName}, ${gincobilobaTaste}`);

// Pra que isso....
const evilVar = {name: 'OMG', taste: 'Deus é mais'};

({name, taste} = evilVar);

console.log(`${name}, ${taste}`);
