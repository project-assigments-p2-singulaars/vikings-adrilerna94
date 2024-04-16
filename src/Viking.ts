import { Soldier } from "./Soldier";

export class Viking extends Soldier{
  name : string;
    constructor(name: string, health: number, strength:number){
        super(health, strength);
        this.name = name;
    }

    // attack(){
    //     return this.strength;
    // }

    receiveDamage(damage: number) {
        this.health -= damage; 

        let healthMessage : string = this.health > 0 ? 
        this.name + ` has received ${damage} points of damage`: this.name + ` has died in act of combat`;

        return healthMessage;
    }
    battleCry(){
        let odinMessage : string = "Odin Owns You All!";
        return odinMessage;
    }
}