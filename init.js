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
        console.log(damage);
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