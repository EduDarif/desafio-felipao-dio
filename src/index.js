const prompt = require('prompt-sync')()

//Solicita o nome e XP do usuário
let nome = prompt('Digite seu nome: ')
let xp = prompt('Digite seu XP: ')

let nivel = ""

//Valida o XP e determina o nível
if (isNaN(xp) || xp < 0) {
    console.log('Erro: XP inválido')
} else {
    switch (true) {
        case (xp <= 1000):
            nivel = "Ferro"
            break
        case (xp >= 1001 && xp <= 2000):
            nivel = "Bronze"
            break
        case (xp >= 2001 && xp <= 5000):
            nivel = "Prata"
            break
        case (xp >= 5001 && xp <= 7000):
            nivel = "Ouro"
            break
        case (xp >= 7001 && xp <= 8000):
            nivel = "Platina"
            break
        case (xp >= 8001 && xp <= 9000):
            nivel = "Ascendente"
            break
        case (xp >= 9001 && xp <= 10000):
            nivel = "Imortal"
            break
        case (xp >= 10001):
            nivel = "Radiante"
            break
        default:
            nivel = "Nível desconhecido"
    }
    console.log(`Olá ${nome}, seu nível é: ${nivel} e seu XP é: ${xp}`)
} 