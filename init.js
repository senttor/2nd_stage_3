class Fighter {

    constructor (name, power , health) {
        this.name = name;
        this.power = power;
        this.health = health;

    }
    setDamage (damage) {

        this.health = this.health - damage;
        console.log(`Здоровье: ${this.health}`);
    }


    hit (enemy, point) {

        let damage = point * this.power;
        console.log(`УРОН  +${damage}`);
        enemy.setDamage(damage);

    }

}

//=====================================

class ImprovedFighter extends Fighter {

    doubleHit (enemy, point) {
        let doubleHitpoint = point * 2;
        super.hit(enemy, doubleHitpoint);
    }

}

//===================================
user1 =  ['Mike', 11, 110];

user2 = ['Jonh',12, 90];


var  fighter = new Fighter(...user1);

var improvedFighter = new ImprovedFighter(...user2);

//====================================================

let fight = (fighter, improvedFighter, ...point)=> {

    while(fighter.health > 0 && improvedFighter.health > 0) {
    
        for ( value of point) {
            if (improvedFighter.health <= 0 ) {
                console.log(`Боец ${improvedFighter.name} : проиграл `);
                return;
            }

            fighter.hit(improvedFighter, value);
            if (improvedFighter.health <= 0) {
                console.log(`Боец ${improvedFighter.name} : проиграл `);
                return;

            }else{
                improvedFighter.hit(fighter, value);
            }
        }
    }

}
fight(fighter, improvedFighter, 3, 5, 5);