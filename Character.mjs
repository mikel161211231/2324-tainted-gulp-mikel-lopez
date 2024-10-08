




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


        return (new Character(fullName, health, magick, stamina, potions));
    }
}