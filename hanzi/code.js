

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

    tiles: [...kanjis, ...words]
    .sort(() => Math.random() - Math.random()),

    twotiles: { flip1: {}, flip2: {} },

    totalMatches: 0,
    totMoves: 0,
    countFlip: 0,
    gameOver: false,

    resetGame(){

        this.totalMatches=0
        this.countFlip=0
        this.totMoves=0
        
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

        this.tiles = [...kanjis, ...words]
        .sort(() => Math.random() - Math.random())
        
        this.twotiles.flip1 = this.twotiles.flip2 = null

        setTimeout( ()=>{
            this.$refs.gameGrid.style.opacity=1
        }, 50 )
    },

    afterFlip(whichtile) {
       
    
    if (this.countFlip<1) { 
        this.countFlip++
        this.twotiles.flip1 = whichtile
        return
    }
    else{
        this.totMoves++
        this.twotiles.flip2 = whichtile
        if (this.twotiles.flip1.id == whichtile.id){
            
                setTimeout( () => {
                this.twotiles.flip1.matched=true
                this.twotiles.flip2.matched=true
                this.twotiles.flip1 = this.twotiles.flip2 = null
                this.totalMatches++

                if (this.totalMatches>5) {
                    this.gameOver = true
                    setTimeout( ()=>{
                        this.$refs.endGame.style.opacity=1
                    }, 100 )
                    }

                }, 450)
                this.countFlip=0 

        }
                 
        else {                                 
            this.countFlip=0
            setTimeout( () => {
                this.twotiles.flip1.flipped=false
                this.twotiles.flip2.flipped=false
                this.twotiles.flip1 = this.twotiles.flip2 = null
                }, 450)
        }

            
    }

},

showInit(){

    this.$refs.title.style.opacity=1
    setTimeout( ()=>{
        this.$refs.gameGrid.style.opacity=1
    }, 100 )
},

showEdit() {

    this.homePage=!this.homePage

if (!this.homePage) {

    setTimeout( ()=>{
        this.$refs.editAll.style.opacity=1
    }, 100 )
}

else {

    setTimeout( ()=>{
        this.$refs.gameGrid.style.opacity=1
    }, 100 )
}
    
}

}

}



