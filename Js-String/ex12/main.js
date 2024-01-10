function repeatStringNumTimes(str, num) {
    if(typeof(num) == "undefined"){
        return str
    }
    var repeat = ''
    for( let i = 0  ; i < num ; i++){
        repeat += str 
    }
    return repeat ;
  }
  console.log(repeatStringNumTimes("Ha!",3))
