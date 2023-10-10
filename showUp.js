let first=5;
let second=7;
// console.log(first,second);

// this is worng approach
// first=second;
// second=first;

// approach1
// const temp=first;
// first=second;
// second=temp;
// console.log(first,second);


// approach2----destructuring
[first,second]=[second,first];
console.log(first,second);