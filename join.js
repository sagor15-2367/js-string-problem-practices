const lyrics = 'tumi bondhu kalapakhi ami blo ki . bosonto kale tomay bolte pari ni....';
const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
const chars = lyrics.split('');
// console.log(chars);

const partial = lyrics.slice(5, 7);

console.log(partial);
const partial1 = lyrics.substring(5, 8);

console.log(partial1);

const line = ['My name is sagor alam', 'i am a student of daffodil international university', 'ashulia,', 'savar'];
const newline=line.join('. ')
console.log(newline);