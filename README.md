# let

A palavra reservada `let` vem para definir melhor o escopo das nossas variáves e evitar o `hoisting` quando se usa `var`.

Hoisting é quando o escopo da variável vai para o topo da função, mesmo que ela seja declarada depois.

Exemplo:

```
function getPickles(isDelicious = true){
    if(isDelicious){
        var taste = 'delicioso';
    } else {
        taste = 'azedo'
    }

    return `Picles é ${taste}`;
}
```

Utilizando a palavra reservada `var`, nós conseguimos acessar o valor de "taste", mesmo que ele não esteja no bloco principal da função;

```
function getPickles(isDelicious = true){
    if(isDelicious){
        let taste = 'delicioso';
    } else {
        taste = 'azedo'
    }

    return `Picles é ${taste}`;
}
```

Se substituirmos `var` por `let` recebemos o erro de que a "taste" não foi definido, ou seja, com o `let` não podemos utilizar as forças do mal, do hoisting.

Execute o arquivo `let.js` com `var` e com `let` e veja o resultado.

# const

A palavra reservada `const` tem as mesmas regras de escopo do `let`, mas seu objetivo principal é o de declarar uma constante (que surpresa).

Quando você declara uma variável como const você não pode alterar o seu valor.

Entendam "valor" como referência, se você alterar o valor de um objeto, por exemplo, vai continuar funcionando, pois a referência é a mesma.

Exemplo:

Com valores primitivos

```
const pickles = 'Picles é vida!';
pickles = 'Se você não gostar de picles, vai dar erro!!'; // vai dar erro
```

Com objetos

```
const myObject = {isPickles: true};

myObject.isPickles = false; // muda que é um côco

myObject = {str: 'Vai dar pau porque estamos mudando a referência.'} // vai dar erro
```

Se você quiser "congelar" os atributos de um objeto você pode fazê-lo usando Object.freeze

```
const freeze = Object.freeze({
    isPickles: true
});

freeze.isPickles = false; // não dá pau mas também não muda.

console.log('freeze: ', freeze);
```

Execute o arquivo `const.js` e veja o resultado.