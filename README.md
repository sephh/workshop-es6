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

Exemplo

```
function createObject() {
    return {
        name: 'Meu objeto',
        arrowLog: (label) => {
            console.log(`${label}: ${this.name}`);
        },
        log: function(label) {
            console.log(`${label}: ${this.name}`);

            return () => {
                console.log('Dentro da função dá pra pegar o escopo do objeto: ', this.name);
            }
        }
    }
}

const myObject = createObject();

myObject.log('log pelo myObject'); // retorna a mensagem com o contexto do objeto
myObject.arrowLog('arrow pelo myObject'); // retorna a mensagem sem ocontexto do objeto

class Pickles {
    log;
    arrowLog;
    name = 'Minha classe picles';

    constructor() {
        // hard bind
        this.log = myObject.log.bind(this); // conseguimos fazer o bind para o contexto da classe
        this.arrowLog = myObject.arrowLog.bind(this); // não conseguimos fazer o bind para o contexto da classe
    }

    logExplicitBind(label){
        // bind explícito
        myObject.log.call(this, label);  // conseguimos fazer o bind para o contexto da classe
    }

    arrowLogExplicitBind(label){
        myObject.arrowLog.call(this, label); // não conseguimos fazer o bind para o contexto da classe
    }

    logWithContext = (label) => {
        console.log(`${label}: ${this.name}`); // por default a arrow function pega o contexto do seu escopo, que é a classe nesse caso
    }
}

const pickles = new Pickles();

pickles.log('log pelo Pickles'); // retorna a mensagem com o contexto da classe
pickles.logExplicitBind('logExplicitBind pelo Pickles'); // retorna a mensagem com o contexto da classe

pickles.arrowLog('arrowLog pelo Pickles'); // retorna a mensagem sem o contexto da classe
pickles.arrowLogExplicitBind('arrowLogExplicitBind pelo Pickles'); // retorna a mensagem sem o contexto da classe

pickles.logWithContext('Arrow function com o contexto do escopo da classe'); // retorna a mensagem com o contexto da classe
```

Execute o arquivo arrow-function e veja o resultado.