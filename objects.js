// function createPickles() {
//     const name = 'Picles';
//     const taste = 'Delicioso';
//
//     return {
//         name: name,
//         taste: taste,
//         // não podemos usar arrow function pois o contexto de this será global para esse caso
//         cook: function() {
//             return `Fazendo um ${this.name} ${this.taste}`;
//         }
//     }
// }

function createPickles() {
    const name = 'Picles';
    const taste = 'Delicioso';

    return {
        name,
        taste,
        cook(){
            return `Fazendo um ${this.name} ${this.taste}`;
        }
    }
}

const pickles = createPickles();

console.log(pickles.cook());