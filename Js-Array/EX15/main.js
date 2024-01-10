
function text_truncate(str, Length, end){
     if (length == null) {
          length = 100;
        }
        if (ending == null) {
          ending = '...';
     }
     if (str.length > length) {
          return str.slice(0, Length - end.length) + end;
        }
        else {
           return str;
      }
     }
 
console.log(text_truncate('We are doing JS string exercises.'))
console.log(text_truncate('We are doing JS string exercises.',19))
console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
