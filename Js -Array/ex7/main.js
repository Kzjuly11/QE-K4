   function mostFrequent(arr, n){
     var mostCount = 0 
     var mostElement 
     for(var i = 0 ; i < n; i++){
         var count = 0 
         for(j = 0 ; j < n ; j++){
             if(arr[i] == arr[j]){
                 count++
             }
         if(count > mostCount){
             mostCount = count
             mostElement = arr[i]
         }    

         }
    } return mostElement
 }

     var arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
     var n = arr.length;
     console.log(mostFrequent(arr, n));

 

