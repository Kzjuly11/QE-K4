
function string_chop(str, size) {
    if(typeof(size) == "undefined"){
        return str.split(" ")
    }
    const x = [];
    for(let i = 0;i < str.length ; i+=size){
        x.push(str.slice(i, i + size));
    }
        return x;
  }
    console.log(string_chop('w3resource'));
    console.log(string_chop('w3resource', 2));
    console.log(string_chop('w3resource', 3));

