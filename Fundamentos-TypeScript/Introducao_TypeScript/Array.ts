// Array
const array: Array<number> = [1, 2, 3, 4]

const stringArray: Array<string> = ['a', 'b', 'c', 'd']

console.log(array[0])
console.log(stringArray.length)

//Metodos do Array
// adicionar elemento
console.log('array original', array)

array.push(3)

console.log('array com novo elemento ',array)

//Removendo o último elemento
array.pop()

console.log('array removendo ultimo elemento ',array)


// Metodo find
const buscaNum = array.find(num => num > 2) // retorna o primeiro elemento do array ou seja ele para quando acha o elemento buscado 

console.log(buscaNum)

// Metodo forEch

array.forEach(num => {
    // Verifica os numeros maior que 2 e se o modulo (resto da divisão e igual a 0)
    if (num > 2 && num % 2 === 0) {
        console.log(num * 2)
    }
})


// Metodo map
// Faz a mesma coisa que o forEch, porém, pode ser usado com funções asincronas e é de melhor performace. 
array.map(num => {
    // Verifica os numeros maior que 2 e se o modulo (resto da divisão e igual a 0)
    if (num > 2 && num % 2 === 0) {
        console.log(num * 2)
    }
})