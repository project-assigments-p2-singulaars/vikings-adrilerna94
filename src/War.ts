import { Saxon } from "./Saxon";
import { Viking } from "./Viking";

export class War {
    vikingArmy : Viking [] = [];
    saxonArmy : Saxon [] = [];
    constructor(){
    }

    addViking(viking: Viking): void{
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon: Saxon): void{
        this.saxonArmy.push(saxon);
    }
    vikingAttack(){
        //Guardo en una constante  de tipo "number" un índice random del array de Objetos viking y Saxon
        let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);


        // Guardo en una constante de tipo "Viking Object"  y "Saxon Object" un vikingo y saxon aleatorio
        let randomViking = this.vikingArmy[randomVikingIndex];
        let randomSaxon = this.saxonArmy[randomSaxonIndex];

        let vikingDamage = randomViking.attack();

        let receiveDamage = randomSaxon.receiveDamage(vikingDamage);

        if (randomSaxon.health <= 0){
            this.saxonArmy.splice(randomSaxonIndex, 1); // elimina el objeto indicado

            //splice corta un array por el número de elementos
            // 1r parámetro donde empieza y el 2o el numero de elementos a partir de donde empieza que corta
        }
        return receiveDamage;

    }
    saxonAttack(){
        //Guardo en una constante  de tipo "number" un índice random del array de Objetos viking y Saxon
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);


        // Guardo en una constante de tipo "Viking Object"  y "Saxon Object" un vikingo y saxon aleatorio
        const randomViking = this.vikingArmy[randomVikingIndex];
        const randomSaxon = this.saxonArmy[randomSaxonIndex];

        const saxonDamage = randomSaxon.attack();

        const receiveDamage = randomViking.receiveDamage(saxonDamage);

        if (randomViking.health <= 0){
            this.vikingArmy.splice(randomVikingIndex, 1); // elimina el objeto indicado

            //splice corta un array por el número de elementos
            // 1r parámetro donde empieza y el 2o el numero de elementos a partir de donde empieza que corta
        }
        return receiveDamage;

    }
    showStatus(){
        let numberSaxon : number, numberViking: number;
        
        numberSaxon = this.saxonArmy.length;
        numberViking = this.vikingArmy.length;

        if (numberSaxon === 0){
            return "Vikings have won the war of the century!";
        }
        else if (numberViking === 0){
            return "Saxons have fought for their lives and survive another day...";
        }
        else if (numberViking >=1 && numberSaxon >=1){
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}



        




        