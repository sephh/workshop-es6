# Promise

As promises não são tão novas, mas vale a pena falar sobre, pois elas fazem parte do nosso dia a dia.

Abordei a criação delas e alguns métodos utilizados como `Promise.all`, `Promise.race` e `Promise.allSettled`.

Exemplo:

Primeiro criamos uma função que retorna uma promise.

```
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
```

Agora acessamos os valores e definimos um tratamento de erro.

```
getItem('Bolo')
    .then((item) => {
        console.log(item);
    })
    .catch((err) => {
        console.error(err);
    });
```

Temos alguns métodos estáticos de Promise que são muito úteis para o tratamento de várias promises ao mesmo tempo.

Considere esse array de promises:

```
const promises = [
    getItem('Picles'),
    getItem('Batata frita'),
    getItem('Sorvete'),
    getItem('Bolo'),
    getItem('Gincobiloba'),
];
```

Você pode esperar que todas as promises se resolvam e trabalhar com o resultados de todas elas de uma vez só com o `Promise.all`.

A questão aqui é que se uma falhar, você não acessa o valor de todas.

```
Promise.all(promises)
    .then((results) => {
        console.log('Promise.all: ', results);
    })
    .catch(()=>{
        console.error('ERROR: Aconteceu um erro em uma das promises');
    })    
```

Você pode pegar a primeira resposta dentro de várias promises com o `Promise.race`.

A questão aqui é que se a primeira falhar, você não acessa o valor de nenhuma.

```
Promise.race(promises)
    .then((results) => {
        console.log('Promise.race: ', results);
    })
    .catch(()=>{
        console.error('ERROR: Aconteceu um erro em uma das promises');
    });
```

Agora se você quiser resolver todas as promises independente do seu status, você pode usar o `Promise.allSttled`.

```
Promise.allSettled(promises)
    .then((results) => {
        console.log('Promise.allSettled: ', results);
    })
    .catch(()=>{
        console.error('ERROR: Aconteceu um erro em uma das promises');
    });
```

Execute o arquivo `promise.js` para ver o resultado.