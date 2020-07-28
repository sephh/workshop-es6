# Rest operator

Foi criado a princípio para resolver os argumentos das funções, mas posteriormente deram mais poderes jedis para ele.

Exemplo de função sem rest operator.

```
function shadyFunction() {
    for(let i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
    }
}
```

Notem que a função se utiliza da variável local `arguments` que existe em todas as funções. Porém, não fica explicito para quem usa essa função como a mágica acontece.

Veja agora com rest operator:

```
function lightFunction(...items){
    for (let item of items){
        console.log(item);
    }
}
``` 

Muito mais explicito. Certo?

Agora outros exemplos de uso do rest operator:

### Destructing

```
const myObject = {
    name: 'Picles',
    taste: 'delicioso'
};

const {name, ...rest} = myObject;

console.log('Destructing: ', name, rest);
```

### Shallow copy

```
const mySecondObject = {
    ...myObject,
    name: 'Gincobiloba'
}
```

### Parâmetros para funções com número indefinido de argumentos

```
const values = [100, 30, 50, 2, 3000];

const minValue = Math.min(...values);
```

Execute o arquivo `rest-operator` e veja o resultado.