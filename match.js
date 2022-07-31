import  {maxGoalsTeam} from './config.js'

export class match
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