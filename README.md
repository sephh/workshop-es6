# Arrow functions

## Sintaxe

```
    const getPickles = () => {
        return 'Eu gosto de picles!';
    }
```

or

```
    const getPickles = () => `Eu gosto de picles!`;
```

## Contexto

Diferente das funções "normais", as arrow functions não possuem seu próprio `this`. O contexto da arrow function é o do escopo onde ela está encapsulada.

Por conta disso elas não possuem método construtor e não é possível fazer um bind explícito como esperado, usando `call` ou `apply`. Também não é possível fazer um hard bind.

Execute o arquivo arrow-function e veja o resultado.