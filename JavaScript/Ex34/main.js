function nthlargest(arr,i) {
    let spliced = arr.splice(0, i);
    console.log(spliced)
    console.log(arr);
     let max = spliced[0]
    for(var j = 1 ; j < spliced.length ; j++){
        if(spliced[j] > max){
            max = spliced[j]          
        } 
    }
    console.log(max)
}
nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652],5);


