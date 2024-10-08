import { Potion } from "./potion.mjs";




export class PotionBag {

    constructor(potions) {
        this.createdPotions = potions;
    }

    static create(ingredients, cauldron){

        const potions = [];

        for (let i = 0; i < ingredients.length; i++) {
            const ingredient1 = ingredients[i];
            
            for (let j = 1; j < ingredients.length; j++) {
                const ingredient2 = ingredients[j];
                
                const potion = cauldron.createPotion(ingredient1, ingredient2);

                potions.push(potion);
            }
        }

        return (new PotionBag(potions));
        
    }
    
    
}