

var num=prompt();
var s = num.toString();
var arr =[] ;
for(var i=0; i < s.length; i++)
  {
    if((s[i] % 2 == 0)&&( s[i+1] %2 == 0)){
      arr.push( s[i],'-');
     }
    else{
      arr.push(s[i]);
     }
  }
console.log(arr.join(''));
