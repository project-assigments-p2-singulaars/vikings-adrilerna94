import {Soldier} from "./Soldier.ts";

export class Saxon extends Soldier{

    constructor(health:number, strength: number){
        super(health,strength);
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage: number){
        this.health = this.health - damage;
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        }
        else{
            return 'A Saxon has died in combat';
        }

        // Otra forma con operador ternario

        /*let msnDamage : string = this.health > 0 ? 
        `A Saxon has received ${damage} points of damage`: 'A Saxon has died in combat';

        return msnDamage;*/
    }

    

}