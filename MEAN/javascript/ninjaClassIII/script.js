class ninja {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.strength = 3;
        this.speed = 3
    }

    sayName (){
        console.log("My name is: "+ this.name)
    }    

    showStats(){
        console.log(this.name+" stats: "+"health: "+this.health+", speed: "
        +this.speed+" strength:"+this.strength+" , and health:"+this.health)
    }

    drinkSake (){
        this.health += 10;
    }
    
}

class Sensei extends ninja {
    constuctor(name) {
        this.name = name;
        this.health = 200;
        this.strength = 10;
        this.speed = 10;
        this.wisdom =10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("Something wise.")
    }
    showStats(){
        console.log(this.name+" stats: "+"health: "+this.health+", speed: "
        +this.speed+" strength:"+this.strength+" , and health:"+this.health+", wisdom:  "+this.wisdom)
    }
    
}


const ninja1 = new ninja("Hyabusa")

ninja1.sayName()
ninja1.showStats()
ninja1.drinkSake()
ninja1.showStats()
const sensei1 = new Sensei("senseiH")
sensei1.speakWisdom()
sensei1.showStats()