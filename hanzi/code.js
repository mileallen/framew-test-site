

function hanyuGame() {

    var kanjis = [
        {id: 1, char:'的', flipped: false, matched: false},
        {id: 2, char:'在', flipped: false, matched: false},
        {id: 3, char:'有', flipped: false, matched: false},
        {id: 4, char:'谁', flipped: false, matched: false},
        {id: 5, char:'请', flipped: false, matched: false},
        {id: 6, char:'谢', flipped: false, matched: false},
    ];
   
    var words = [
        {id: 1, mean: 'de - of', flipped: false, matched: false},
        {id: 2, mean: 'Zài - in, at', flipped: false, matched: false},
        {id: 3, mean: 'Yǒu - have', flipped: false, matched: false},
        {id: 4, mean: 'Shéi - who', flipped: false, matched: false},
        {id: 5, mean: 'Qǐng - please', flipped: false, matched: false},
        {id: 6, mean: 'xie - thanks', flipped: false, matched: false},
    ];
    

return {

    kanjis,
    words,

    homePage: true,

    cards: [...kanjis, ...words]
    .sort(() => Math.random() - Math.random()),

    twoCards: { flip1: {}, flip2: {} },

    totalMatches: 0,
    countFlip: 0,
    gameOver: false,

    resetGame(){

        this.gameOver=false
        this.homePage=true

        kanjis.forEach(kanji => {
            kanji.flipped=false
            kanji.matched=false
        })

        words.forEach(word => {
            word.flipped=false
            word.matched=false
        })

        this.cards = [...kanjis, ...words]
        .sort(() => Math.random() - Math.random())
        this.totalMatches=0
        this.countFlip=0
        this.twoCards.flip1 = this.twoCards.flip2 = null
    },

    afterFlip(whichCard) {
       
    
    if (this.countFlip<1) { 
        this.countFlip++
        this.twoCards.flip1 = whichCard
        return
    }
    else{
        this.twoCards.flip2 = whichCard
        if (this.twoCards.flip1.id == whichCard.id){
            
                setTimeout( () => {
                this.twoCards.flip1.matched=true
                this.twoCards.flip2.matched=true
                this.twoCards.flip1 = this.twoCards.flip2 = null
                this.totalMatches++

                if (this.totalMatches>5) {
                    this.gameOver = true
                    }

                }, 450)
                this.countFlip=0 

        }
                 
        else {                                 
            this.countFlip=0
            setTimeout( () => {
                this.twoCards.flip1.flipped=false
                this.twoCards.flip2.flipped=false
                this.twoCards.flip1 = this.twoCards.flip2 = null
                }, 450)
        }

            
    }

}

}

}



