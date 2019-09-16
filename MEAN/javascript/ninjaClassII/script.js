function newNinja(name){
    var strength = 3;
    var speed = 3; 
    this.name = name;
    this.health = 100;

    this.showStats = function (){
    console.log("health is: "+this.health+", names is: "+this.name+", speed is: "+speed+", strenght is:"+strength);
    return this;
    }

    this.sayName = function (){
        console.log ("My name is "+ this.name)
    }

    this.drinkSake = function (){
        this. health += 10
        this.showStats();
    }

    this.punch = function (other){
     other.health -= 5; 
     console.log(other.name+" was punched by "+this.name+" and lost 5 health")
    }

    this.kick = function(other){
        var strengthM = strength * 5;
        other.health -= strengthM;
    }
}

const blueNinja = new newNinja("Bill Gates");
const redNinja = new newNinja("Hyabusa");
blueNinja.sayName();
blueNinja.showStats();
redNinja.sayName();
redNinja.showStats();
blueNinja.punch(redNinja)
redNinja.showStats();
redNinja.kick(blueNinja)
blueNinja.showStats();
redNinja.showStats();
