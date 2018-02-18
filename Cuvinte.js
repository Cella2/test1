
var NumberOfWords = 35

var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "Primavara"
words[2] = "Castel"
words[3] = "Calatorie"
words[4] = "Padure"
words[5] = "Lavanda"
words[6] = "Submarin"
words[7] = "Nuante"
words[8] = "Trandafiri"
words[9] = "Necunoscut"
words[10] = "Peisaj"
words[11] = "Furtuna"
words[12] = "Luna Plina"
words[13] = "Cabana"
words[14] = "Far"
words[15] = "Elefant"
words[16] = "Calauza"
words[17] = "Copilarie"
words[18] = "Albastru"
words[19] = "Acasa"
words[20] = "Joaca"
words[21] = "Varf"
words[22] = "Munte"
words[23] = "Dealuri"
words[24] = "Londra"
words[25] = "Paris"
words[26] = "Interior"
words[27] = "Faclie"
words[28] = "Singuratate"
words[29] = "Prietenie"
words[30] = "Reverie"
words[31] = "Serenitate"
words[32] = "Nemarginit"
words[33] = "Exterior"
words[34] = "Liniste"
words[35] = "Galagie"



function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}