




export class Character {
    constructor(fullName, health, magick, stamina, potions) {
        this.fullName = fullName;
        this.health = health;
        this.magick = magick;
        this.stamina = stamina;
        this.potions = potions;
    }


    static from(playerData, potions){

        const fullName = playerData.name + " The "+ playerData.class;
        const health = playerData.health;
        const magick = playerData.magick;
        const stamina = playerData.stamina;


        return (new Character(fullName, health, magick, stamina, potions.createdPotions));
    }

    drinkEmAll(){

        for (let i = 0; i < this.potions.length; i++) {
            const potion = this.potions[i];

            const type = potion.name.split(" ")[0];
            console.log(type);
            
            switch (type) {
                case "Potion":
                    this.drinkPotion(potion);
                    break;
                case "Poison":
                    this.drinkPoison(potion);
                    break;
            
                default:
                    break;
            }

        }
    }

    drinkPotion(potion){

        const name = potion.name.split(" ");

        let type = "";
        console.log(potion);
        
        let otherTypeOfEffect = true;

        for (let i = 0; i < name.length; i++) {
            const word = name[i];
            
            switch (word) {
                case "Magicka":
                    this.updateMagick(potion.value);
                    otherTypeOfEffect = false;
                    break;
                    
                case "Stamina":
                    this.updateStamina(potion.value);
                    otherTypeOfEffect = false;
                    break;

                case "Health":
                    this.updateHealth(potion.value);
                    otherTypeOfEffect = false;
                    break;
                    
                default:
                    break;
            }
            
        }

        if (otherTypeOfEffect) {
            this.updateMagick(1);
                    this.updateStamina(1);
                    this.updateHealth(1);
        }
        console.log(this);
    }

    drinkPoison(potion){

    }

    updateMagick(value){
        this.magick += value;
    }

    updateStamina(value){
        this.stamina += value;
    }

    updateHealth(value){
        this.health += value;
    }
}