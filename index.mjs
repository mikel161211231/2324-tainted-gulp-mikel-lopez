import { Cauldron } from "./cauldron.mjs";
import { Character } from "./Character.mjs";
import { Ingredients } from "./ingredients.mjs";
import { PotionBag } from "./PotionBag.mjs";
import { getData, getCharacterData } from "./service.mjs";



const execute = async () => {

    try {
        
        // const data =  dataI;//await getData();
        const data =  await getData();
        const dataPlayer = await getCharacterData();
        

        // Create the ingredients
        const ingredients = Ingredients.load(data);
        
        // Create the cauldron of potions
        const cauldron = new Cauldron(ingredients);
     
        const pouch_aged = dataPlayer.players[0].pouch_aged;
        const pouch_red = dataPlayer.players[0].pouch_red;
        const pouch_green = dataPlayer.players[0].pouch_green;
        const pouch_yellow = dataPlayer.players[0].pouch_yellow;
       
        // Create the bag of potions
        const potionBagAged = PotionBag.create(pouch_aged, cauldron);
        const potionBagRed = PotionBag.create(pouch_red, cauldron);
        const potionBagGreen = PotionBag.create(pouch_green, cauldron);
        const potionBagYellow = PotionBag.create(pouch_yellow, cauldron);


        console.log();
        
        
        // Create character 
        console.log("\n\n-----------------------------");
        console.log("|         Pouch Aged        |");
        console.log("-----------------------------\n");
        const playerAged = Character.from(dataPlayer.players[0], potionBagAged);
        showCharacter(playerAged)
        playerAged.drinkEmAll();


        console.log("\n\n----------------------------");
        console.log("|         Pouch Red        |");
        console.log("----------------------------\n");
        const playerRed = Character.from(dataPlayer.players[0], potionBagRed);
        showCharacter(playerRed)
        playerRed.drinkEmAll();


        console.log("\n\n------------------------------");
        console.log("|         Pouch Green        |");
        console.log("------------------------------\n");
        const playerGreen = Character.from(dataPlayer.players[0], potionBagGreen);
        showCharacter(playerGreen)
        playerGreen.drinkEmAll();


        console.log("\n\n-------------------------------");
        console.log("|         Pouch Yellow        |");
        console.log("-------------------------------\n");
        const playerYellow= Character.from(dataPlayer.players[0], potionBagYellow);
        showCharacter(playerYellow)
        playerYellow.drinkEmAll();


        console.log();
        


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

function showCharacter(character) {
    console.log(character.fullName);
    console.log("---------------------------------------------------------------------");
    console.log(`Health:           ${character.health} `);
    console.log(`Magick:           ${character.magick} `);
    console.log(`Stamina:          ${character.stamina} `);

    for (let i = 0; i < character.potions.length; i++) {
        const potion = character.potions[i];

        console.log("Potion "+(i+1)+":         "+ potion.name);
        
    }
    
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");
    
    
}