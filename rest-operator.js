// So shady
function shadyFunction() {
    for(let i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
    }
}

function lightFunction(...items){
    for (let item of items){
        console.log(item);
    }
}

shadyFunction('Picles', 'Gincobiloba');

/** Outras utilidades: * */

// Destructing

const myObject = {
    name: 'Picles',
    taste: 'delicioso'
};

const {name, ...rest} = myObject;

console.log('Destructing: ', name, rest);

// Shallow copy

const mySecondObject = {
    ...myObject,
    name: 'Gincobiloba'
}

console.log('Shallow copy: ', mySecondObject);

// Passar parâmetros para funções com número indefinido de argumentos

const values = [100, 30, 50, 2, 3000];

const minValue = Math.min(...values);

console.log('Valor mínimo: ', minValue);