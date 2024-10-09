




export class Character {
    constructor(fullName, health, magick, stamina, potions) {
        this.fullName = fullName;
        this.health = health;
        this.magick = magick;
        this.stamina = stamina;
        this.potions = potions;
    }


    static from(playerData, potions) {

        const fullName = playerData.name + " The " + playerData.class;
        const health = playerData.health;
        const magick = playerData.magick;
        const stamina = playerData.stamina;


        return (new Character(fullName, health, magick, stamina, potions.createdPotions));
    }

    drinkEmAll() {

        for (let i = 0; i < this.potions.length; i++) {
            const potion = this.potions[i];

            const type = potion.name.split(" ")[0];

            if (potion.name === "Potion of Sanity") {
                this.drinkPotionOfSanity(potion);
                console.log(this.fullName +" drinks "+ potion.name +" and gains "+ potion.value +" points of health, magick & stamina ");
                this.showPlayerStats();
                console.log(this.fullName +" has found the Potion of Sanity. His mind is healed. Well done!!");
                break;
            } else if(potion.name === "Failed potion"){
                console.log("Failed Potion. "+ this.fullName +" cannot drink");
                this.showPlayerStats();
            } else {
                switch (type) {
                case "Potion":
                    this.drinkPotion(potion);
                    this.showPlayerStats();
                    break;
                case "Poison":
                    this.drinkPoison(potion);
                    this.showPlayerStats();
                    break;

                default:                    
                    break;
                }
            }

            if(this.isGameOver()){
                break;
            }

        }
    }

    drinkPotionOfSanity(potion){
        this.updateHealth(potion.value);
        this.updateMagick(potion.value);
        this.updateStamina(potion.value);
    }

    drinkPotion(potion) {

        const name = potion.name.split(" ");

        let otherTypeOfEffect = true;

        for (let i = 0; i < name.length; i++) {
            const word = name[i];

            switch (word) {
                case "Magicka":
                    this.updateMagick(potion.value);
                    otherTypeOfEffect = false;
                    console.log(this.fullName +" drinks "+ potion.name +" and gains "+ potion.value +" point of magick ");
                    break;

                case "Stamina":
                    this.updateStamina(potion.value);
                    otherTypeOfEffect = false;
                    console.log(this.fullName +" drinks "+ potion.name +" and gains "+ potion.value +" point of stamina");
                    break;

                case "Health":
                    this.updateHealth(potion.value);
                    otherTypeOfEffect = false;
                    console.log(this.fullName +" drinks "+ potion.name +" and gains "+ potion.value +" point of health");
                    break;

                default:
                    break;
            }

        }

        if (otherTypeOfEffect) {
            console.log(this.fullName +" drinks "+ potion.name +" and gains "+ potion.value +" point of health, magick & stamina");
            this.updateMagick(1);
            this.updateStamina(1);
            this.updateHealth(1);
        }
    }

    drinkPoison(potion) {
        const name = potion.name.split(" ");

        let otherTypeOfEffect = true;

        for (let i = 0; i < name.length; i++) {
            const word = name[i];

            switch (word) {
                case "Magicka":
                    this.updateMagick(-potion.value);
                    otherTypeOfEffect = false;
                    console.log(this.fullName +" drinks "+ potion.name +" and loses "+ potion.value +" point of magick");
                    break;

                case "Stamina":
                    this.updateStamina(-potion.value);
                    otherTypeOfEffect = false;
                    console.log(this.fullName +" drinks "+ potion.name +" and loses "+ potion.value +" point of stamina");
                    break;

                case "Health":
                    this.updateHealth(-potion.value);
                    otherTypeOfEffect = false;
                    console.log(this.fullName +" drinks "+ potion.name +" and loses "+ potion.value +" point of health");
                    break;

                default:
                    break;
            }

        }

        if (otherTypeOfEffect) {
            console.log(this.fullName +" drinks "+ potion.name +" and loses "+ potion.value +" point of health, magick & stamina");
            this.updateMagick(-1);
            this.updateStamina(-1);
            this.updateHealth(-1);
        }
    }

    showPlayerStats(){
        console.log("Magick ~~~> " + this.magick);
        console.log("Stamina ~~~> " + this.stamina);
        console.log("Health ~~~> " + this.health);
        console.log("##############################################");
        
    }

    updateMagick(value) {
        this.magick += value;
    }

    updateStamina(value) {
        this.stamina += value;
    }

    updateHealth(value) {
        this.health += value;
    }


    isGameOver(){

        if (this.stamina < 1) {
            console.log(this.fullName +" has lost all his stamina. He feels completely exhausted.");
            return true;
        }else if (this.magick < 1) {
            console.log(this.fullName +" has been drained of all his magic and X.G. Scholar's chaos spell finishes him off.");
            return true;
        }else if (this.health < 1) {
            console.log(this.fullName +" has died.");
            return true;
        }else {
            return false;
        }
    }

}