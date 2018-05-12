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