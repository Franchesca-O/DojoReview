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

}

const ninja = new newNinja("Hyabusa");
ninja.showStats();
ninja.sayName();
ninja.drinkSake();