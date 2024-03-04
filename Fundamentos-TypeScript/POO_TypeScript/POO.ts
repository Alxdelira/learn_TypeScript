// POO significa Programação Orientada a Objetos.
// É um paradigma de programação que utiliza a abstração de "objetos" para modelar sistemas e resolver problemas.

class User {
    // Aqui estamos definindo propriedades da classe User.
    // Elas são implicitamente inicializadas com valores padrão.
    name1: string = 'Alexandre'; // Nome padrão é 'Alexandre'
    age: number = 32; // Idade padrão é 32

    // Este é o construtor da classe.
    // Ele é explicitamente definido para permitir a criação de objetos User com valores personalizados.
    constructor(name1: string, age: number) {
        this.name1 = name1; // Atribui o nome fornecido ao objeto User
        this.age = age; // Atribui a idade fornecida ao objeto User
    }

    // Método para mostrar o nome do usuário.
    showName() {
        console.log(this.name1); // Exibe o nome do usuário no console.
    }
}

// Criando um novo usuário com nome 'Alexandre Nogueira' e idade 33.
const user: User = new User('Alexandre Nogueira', 33);
user.showName(); // Mostra 'Alexandre Nogueira' no console.

// Criando outro usuário com nome 'Mateus de Moraes' e idade 20.
const otherUser: User = new User('Mateus de Moraes', 20);
otherUser.showName(); // Mostra 'Mateus de Moraes' no console.
