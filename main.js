// teams 
                // 1º      2º
const grupoA = ["España", "Noruega"];
const grupoB = ["Inglaterra", "Países Bajos"];
const grupoC = ["Alemania", "Islandia"];
const grupoD = ["Francia", "Suiza"];


// max goals by team
const maxGoalsTeam = 10;

// Class
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

    play()
    {
        do
        {
            this.goalsT1 = Math.floor(Math.random() * (maxGoalsTeam+1));
            this.goalsT2 = Math.floor(Math.random() * (maxGoalsTeam+1));
        }while(this.goalsT1 == this.goalsT2);

        if(this.goalsT1 >this.goalsT2)
        {
            this.teamWinner = this.team1;
            this.teamLoser = this.team2;           
        }  
        else
        {
            this.teamWinner = this.team2;
            this.teamLoser = this.team1;               
        } 
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

console.log("GRUPO A: " + grupoA[0] + ", " + grupoA[1]);
console.log("GRUPO B: " + grupoB[0] + ", " + grupoB[1]);
console.log("GRUPO C: " + grupoC[0] + ", " + grupoC[1]);
console.log("GRUPO D: " + grupoD[0] + ", " + grupoD[1]);

console.log("\n===== CUARTOS DE FINAL =====\n");

const cuartos1 = new match(grupoA[0],grupoB[1]);
const cuartos2 = new match(grupoB[0],grupoA[1]);
const cuartos3 = new match(grupoC[0],grupoD[1]);
const cuartos4 = new match(grupoD[0],grupoC[1]);

cuartos1.play();
cuartos2.play();
cuartos3.play();
cuartos4.play();

console.log(cuartos1.toString());
console.log(cuartos2.toString());
console.log(cuartos3.toString());
console.log(cuartos4.toString());

console.log("\n===== SEMIFINALES =====\n");

const semi1 = new match(cuartos1.teamWinner,cuartos3.teamWinner);
const semi2 = new match(cuartos2.teamWinner,cuartos4.teamWinner);

semi1.play();
semi2.play();

console.log(semi1.toString());
console.log(semi2.toString());

console.log("\n===== TERCER Y CUARTO PUESTO =====\n");

const terCuarPuesto = new match(semi1.teamLoser,semi2.teamLoser);

terCuarPuesto.play();
console.log(terCuarPuesto.toString());

console.log("\n===== FINAL =====\n");

const final = new match(semi1.teamWinner,semi2.teamWinner);

final.play();
console.log(final.toString());


console.log("\n\n====================================================");
console.log("¡" + final.teamWinner + " campeona de la EURO WOMEN’S CUP!");
console.log("====================================================\n");