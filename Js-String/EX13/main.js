function insert(str , insString , position ){
    if(typeof(insString) == "undefined" && typeof(position) == "undefined"  ){
        return str
    }
    if(typeof(position) == "undefined"){
         return (insString + str) 
    }
    return (str.slice(0,position) + insString + str.slice(position))
}
console.log(insert("We are doing some exercises.", 'JavaScript ', 18))
console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.', 'JavaScript '));