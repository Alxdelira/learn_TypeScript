// Objetos é Interfaces

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: string
}


const pessoa: Pessoa = {
    nome: "Alexandre",
    idade: 32
}


const outraPessoa: Pessoa = {
    nome: "Alexandre",
    idade: 32,
    profissao: "Dev"
}

const arraypessoa: Array<Pessoa> = [
    pessoa,
    outraPessoa
]
console.log(arraypessoa[0].idade)