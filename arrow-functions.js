// global.name = 'gincobiloba';

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

console.log('*** console dos métodos do objeto ***\n');

myObject.log('log pelo myObject');
myObject.arrowLog('arrow pelo myObject');

class Pickles {
    log;
    arrowLog;
    name = 'Minha classe picles';

    constructor() {
        // hard bind
        this.log = myObject.log.bind(this);
        this.arrowLog = myObject.arrowLog.bind(this);
    }

    logExplicitBind(label){
        // bind explícito
        myObject.log.call(this, label);
    }

    arrowLogExplicitBind(label){
        myObject.arrowLog.call(this, label);
    }

    logWithContext = (label) => {
        console.log(`${label}: ${this.name}`);
    }
}

const pickles = new Pickles();

console.log('\n*** console dos métodos da classe ***\n');

pickles.log('log pelo Pickles');
pickles.logExplicitBind('logExplicitBind pelo Pickles');

pickles.arrowLog('arrowLog pelo Pickles');
pickles.arrowLogExplicitBind('arrowLogExplicitBind pelo Pickles');

pickles.logWithContext('Arrow function com o contexto do escopo da classe');

// const func = () => {};

// const myBug = new func();

// function func() {
// }
//
// const noBug = new func();

