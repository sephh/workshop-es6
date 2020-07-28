# Criação de objetos

Vamos falar sobre nova sintaxe para criar os objetos.

Exemplo da forma default:

```
function createPickles() {
    const name = 'Picles';
    const taste = 'Delicioso';

    return {
        name: name,
        taste: taste,
        // não podemos usar arrow function pois o contexto de this será global para esse caso
        cook: function() {
            return `Fazendo um ${this.name} ${this.taste}`;
        }
    }
}
```

Exemplo da forma nova:

```
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
```

Execute o arquivo `objects.js` para ver o resultado.