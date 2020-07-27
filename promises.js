'use strict';

const getItem = (name) => {
    return new Promise((resolve, reject) => {
        console.log('Vou emitir um valor em 1 segundo...');

        setTimeout(() => {
            if (name === 'Gincobiloba') {
                reject('ERROR: Não gostamos de Gincobiloba');
            } else {
                resolve(`O item escolhido foi: ${name}`);
            }
        }, 1000);
    });
}

// getItem('Bolo')
//     .then((item) => {
//         console.log(item);
//     })
//     .catch((err) => {
//         console.error(err);
//     });

// const promises = [
//     getItem('Picles'),
//     getItem('Batata frita'),
//     getItem('Sorvete'),
//     getItem('Bolo'),
//     getItem('Gincobiloba'),
// ];

// Promise.all(promises)
//     .then((results) => {
//         console.log('Promise.all: ', results);
//     })
//     .catch(()=>{
//         console.error('ERROR: Aconteceu um erro em uma das promises');
//     })
//
// Promise.race(promises)
//     .then((results) => {
//         console.log('Promise.race: ', results);
//     })
//     .catch(()=>{
//         console.error('ERROR: Aconteceu um erro em uma das promises');
//     });

// Promise.allSettled(promises)
//     .then((results) => {
//         console.log('Promise.allSettled: ', results);
//     })
//     .catch(()=>{
//         console.error('ERROR: Aconteceu um erro em uma das promises');
//     });

module.exports = {
    getItem
}