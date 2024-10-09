import { Effect } from "./effect.mjs";


export class Ingredient {
    constructor(name, effects, value, weight) {
        this.name = name;
        this.effects = effects;
        this.value = value;
        this.weight = weight;

    }

    static from(ingredient){
        
        
        return(new Ingredient(
            ingredient.name,
            ingredient.effects.map(effects => Effect.from(effects)),
            ingredient.value,
            ingredient.weight
        ));
    }

    hasName(name){
        return (this.name === name);
    }

    findCommonEffects(otherIngredient){
        return(this.effects.filter(effect => otherIngredient.hasEffect(effect)))
    }

    hasEffect(effect){
        return (this.effects.some(candidate => effect.name === candidate.name))
    }
}