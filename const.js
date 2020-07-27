const pickles = 'Picles é vida!';

// pickles = 'Se você não gostar de picles, vai dar erro!!';

const myObject = {isPickles: true};

myObject.isPickles = false; // muda que é um côco

// myObject = {str: 'Vai dar pau porque estamos mudando a referência.'}

console.log('myObject: ', myObject);

/**
 * Se você quiser "congelar" os atributos de um objeto você pode fazê-lo usando Object.freeze
 * * */

const freeze = Object.freeze({
    isPickles: true
});

freeze.isPickles = false; // não dá pau mas também não muda.

console.log('freeze: ', freeze);