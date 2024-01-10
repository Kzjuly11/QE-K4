function capitalize_Words(str){
    arr = str.split(" ") ; 
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
    }
   return arr.join("")
  }
  console.log(capitalize_Words("js string exercises"))