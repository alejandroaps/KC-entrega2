// teams 
                // 1º      2º
const grupoA = ["España", "Noruega"];
const grupoB = ["Inglaterra", "Países Bajos"];
const grupoC = ["Alemania", "Islandia"];
const grupoD = ["Francia", "Suiza"];


class match
{
    constructor(team1,team2)
    {
        this.team1 = team1;
        this.team2 = team2;
        this.goalsT1 = -1;
        this.goalsT2 = -1;
        this.teamWinner = null;
        this.teamLoser = null;
    }

    toString()
    {
        return this.team1 +  " " + this.goalsT1 + " - " + this.goalsT2 +  " " + this.team2 + " => " + this.teamWinner;
    }

}


// Program
console.log("====================================================");
console.log("=== COMIENZAN LAS FASES ELIMINATORIAS DEL TORNEO ===");
console.log("====================================================");

console.log("\nEquipos que participan en el playoff:\n")

console.log("GRUPO A:",grupoA[0], grupoA[1]);
console.log("GRUPO B:",grupoB[0], grupoB[1]);
console.log("GRUPO C:",grupoC[0], grupoC[1]);
console.log("GRUPO D:",grupoD[0], grupoD[1]);

console.log("\n===== CUARTOS DE FINAL =====\n");

const cuartos1 = new match(grupoA[0],grupoB[1]);
const cuartos2 = new match(grupoB[0],grupoA[1]);
const cuartos3 = new match(grupoC[0],grupoD[1]);
const cuartos4 = new match(grupoD[0],grupoC[1]);

console.log(cuartos1.toString());
console.log(cuartos2.toString());
console.log(cuartos3.toString());
console.log(cuartos4.toString());
