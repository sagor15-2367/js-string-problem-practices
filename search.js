const lyrics='tumi bondhu kalapakhi ami blo ki .bosonto kale tomay bolte pari ni....';
// const doesExist=lyrics.includes('blo');
// const doesExist=lyrics.includes('blO');
const searchString='blO';

const lyricsLowerCase=lyrics.toLowerCase();
// const doesExist=lyricsLowerCase.includes()

// const doesExist=lyrics.includes(searchString);
const searchStringLower=searchString.toLowerCase();
const doesExist=lyricsLowerCase.includes(searchStringLower);
//using one line 
const doesExistOneLine=lyrics.toLowerCase().includes(searchString.toLowerCase());

// console.log(doesExist);
// console.log(doesExistOneLine);


// --------------------------------
//indexOf

console.log(lyrics.indexOf('blo'));
console.log(lyrics.indexOf('sada'));
if(lyrics.indexOf('sada') !== -1){
    console.log('exists inside the string');
}
else{
    console.log('cannot find it');
}
// -----------------------------------
//startsWith
console.log(lyrics.startsWith('tumi'));

//--------------------------------------
//endwith
const fileName='mybiodate.pdf';
const otherfile='mypic.png';
console.log(fileName.endsWith('.pdf'));