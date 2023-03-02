//No utilizar Switch - Qué alternativas hay - JS Avanzado
console.clear();
const GAME_OPTIONS = ['PIEDRA', 'PAPEL', 'TIJERA'];

//Objeto GAME_RULES dirá en función del valor del jugador1 si gana (propiedad es true) o pierde (propiedad es false)
//Cómo "false" vale igual que "undefined" podemos ahorrarnos el valor de la 2da sup-propiedad
const GAME_RULES = {
    PIEDRA: {
        TIJERA: true,
        //PAPEL: false,
    },
    PAPEL: {
        PIEDRA: true,
        //TIJERA: false,
    },
    TIJERA: {
        PAPEL: true,
        //PIEDRA: false
    }
}

/**
 * Función que ejecuta el juego de piedra papel y tijera
 * @param player1 Opción del jugador1
 * @param player2 Opción del jugador2
 */
function game(player1, player2){
    if(!GAME_OPTIONS.includes(player1) || !GAME_OPTIONS.includes(player2))
        throw new Error('Opcióon de juego no válida');
    if(player1 === player2) return "Empate";

    if(GAME_RULES[player1][player2]) return 'Player1 gana';
    else return 'Player2 gana';
}
console.log(game('PAPEL', 'PIEDRA'));