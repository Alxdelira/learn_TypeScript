//Decisões e Repetições 

const num: number = 15
if (num > 15) {
    console.log("Numnero maior que 15")
} else if (num == 15) {
    console.log("Numero e igual 15")
}else {
    console.log("Numero e menor que 15")
}

const typeUser = {
    admin: "Você é um administrador",
    student: "Você é um Estudante",
    viewer: "Você é um Vizualizador"
}

function validateUser(user: string) {
    console.log(typeUser[user as keyof typeof typeUser])
}

const usuario = "admin"

validateUser(usuario)
validateUser("viewer")
validateUser("student")
