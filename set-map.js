/** MAP * */

console.log('*** MAP *** \n');

const pickle = {id: 1, taste: 'delicious'};
const picklesMap = new Map();

picklesMap.set(pickle.id, pickle);

console.log('Map has item ',picklesMap.has(pickle.id)); // retorna true, pois essa é uma chave do Map
console.log('Map size ',picklesMap.size); // retorna 1, pois é a quantidade de itens no Map
console.log('Map item ',picklesMap.get(pickle.id)); // retorna o valor de pickle, que foi relacionado com essa chave
console.log('Map array ', [...picklesMap]); // retorna um array de arrays onde a primeira posição de cada um é a chave e a segunda é o valor

picklesMap.delete(pickle.id); // remove o item relacionado com essa chave

/** SET * */

console.log('\n*** SET *** \n');

const picklesSet = new Set();

picklesSet.add(pickle);
picklesSet.add(pickle);
picklesSet.add(pickle);
picklesSet.add(pickle);

console.log('Set has item ', picklesSet.has(pickle)); // retorna true, pois essa é um item do Set
console.log('Set size ', picklesSet.size); // retorna 1, pois no Set todos os dados são únicos
console.log('Set array ', [...picklesSet]); // array com todos os items de picklesSet

for (let p of picklesSet) {
    console.log(p); // valor do item
}

picklesSet.delete(pickle); // remove o item do Set
