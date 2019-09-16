class Card {
    constructor(){
    this.deck = {};    
    }
    
    makeCards(){
        this.deck = {};
        const suits = ["Hearts","Clubs","Diamonds","Spades"];
        const faces = ["Ace","Two","Three","Four","Five",
        "Six","Seven","Eight","Nine","Ten","Jack","Queen","King"];
        const values = [1,2,3,4,5,6,7,8,9,10,11,12,13];
        var k = 1;
        for (const e of suits){
            for (var i = 0, j = 0; i < faces.length, j < values.length; i++, j++){
                this.deck[k] = {"name":faces[i]+" of "+e ,"face":faces[i],"suit":e,"value":values[j]}
                k++;
                
            }
        } return this;

    } 


    showCard(info){
        let deck = this.deck
        for (var k in deck)
            if (deck[k].name == info){
                console.log(deck[k])
            }
        } 
    }
    
class Deck {
    constructor(deck){
    }

    shuffleDeck(deck){
        var deck2 = []
        for (var l in deck){
            deck2.push(deck[l])
        }
        var array = []
        for (var m = 1; m < 53; m++)[
            array.push(deck2[0][m])
        ]
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
      }

    resetDeck(deck){
        var resetDeck2 = card1.makeCards();
        return resetDeck2;
    }  

    dealFirstHand(deck){
        var returning = [];
        var hand = [];
        var card = [];
        var deck = deck;
        for (var i = 0; i < 5; i++){
            card = deck.shift();
            hand.push(card)
        }
        returning.push(hand,deck);
        return returning;        
    }
    
    deal(deck){
        var returns = []
        var hand = []
        var card = deck.shift();
        var deck = deck;
        hand.push(card)
        returns.push(hand,deck)
        return returns;
    }
}

class Player {
    constructor (name){
        this.name = name;
        }

    draw(deck){
        var cards = deck1.dealFirstHand(newDeck)
        return cards;
    }

    drop(hand){
        var dropped = hand[0].pop()
        return hand;
    }

    drawNew(deck){
        var updatedHand= [];
        var currentHand = hand[0];
        var liveDeck = hand[1]
        var cards = deck1.deal(liveDeck)
        currentHand.push(cards[0][0])
        var newDeck = cards[1]
        updatedHand.push(currentHand,newDeck);
        return updatedHand;
    }
}








const card1 = new Card();
const deck = card1.makeCards();
// card1.showCard("Ace of Hearts");
const player1 = new Player("Franchesca");
const deck1 = new Deck(deck);
const newDeck = deck1.shuffleDeck(card1);
var hand = player1.draw(newDeck)
player1.drop(hand);
player1.drop(hand);
player1.drawNew(hand)
player1.drawNew(hand)
hand = deck1.resetDeck(card1)
console.log(hand)
