import { Cauldron } from "./cauldron.mjs";
import { Ingredients } from "./ingredients.mjs";
import { PotionBag } from "./PotionBag.mjs";
import { getCharacterData, getData } from "./service.mjs";




const execute = async () => {

    try {
        
        const data = await getData();
        const dataPlayer = await getCharacterData();

        // Create the ingredients
        const ingredients = Ingredients.load(data);

        // console.log(data);
        // console.log(dataPlayer);
        
        
        
        // Create the cauldron of potions
        const cauldron = new Cauldron(ingredients);

        const potionBag = PotionBag.create(ingredients, cauldron);

        

        const potion1 = cauldron.createPotion("Bear Claws", "Bee");
        showPotion(potion1);

        const potion2 = cauldron.createPotion("Chicken's Egg", "Chaurus Eggs");
        showPotion(potion2);

        const potion3 = cauldron.createPotion("Chaurus Eggs", "Bleeding Crown");
        showPotion(potion3);

        const potion4 = cauldron.createPotion("Nightshade", "Ectoplasm");
        showPotion(potion4);
        

    } catch (error) {
        console.log(error.message);
    }
}




execute();



export function showIngredients(ingredients) {

    console.log("--------------------------------------------------------------------------");
    console.log("    Showing All The Ingredients ");    
    console.log("--------------------------------------------------------------------------");
    
    for (let i = 0; i < ingredients.length; i++) {
        const ingredient = ingredients[i];
        console.log("Name ~~~> "+ ingredient.name);
        console.log("Value ~~~> "+ ingredient.value);
        console.log("Weight ~~~> "+ ingredient.weight);
        console.log("Effects");
        for (let i = 0; i < ingredient.effects.length; i++) {
            const effect = ingredient.effects[i];

            const type = (effect.type === 'harmful') ? 'Poison': (effect.type === 'beneficial') ? 'Potion' : '';

            console.log(type +" of "+ effect.name);
            
        }
        
        
    }
}




function showPotion(potion) {
    console.log(`${potion.name}`);
    console.log(`Value:          ${potion.value} `);
    console.log(`Weight:         ${potion.weight}  `);
    console.log(`Time:           ${potion.time} `);
    console.log(`-------------------------------------------------------`);
    
}