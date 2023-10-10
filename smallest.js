var smallest=[100,103,99,143,123];
var smallestNumber=smallest[0];
for(let i=1;i<smallest.length;i++){
    if(smallest[i]<smallestNumber){
        smallest=smallest[i];
    }
}
console.log(smallest);