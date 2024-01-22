function Avg(mark){
  var total = 0  ; 
  var avg ;    
  var n = mark.length
    for(var i = 0 ; i < n ;i++){
       total += mark[i]
        avg = total / n
    }
    console.log(avg)
    if(avg < 60){
      console.log("F")
    }
    else if(60 < avg < 70){
      console.log("D")
    }
    else if(70 < avg < 80){
      console.log("C")
    }
    else if(80 < avg < 90){
      console.log("B")
    }
    else if(90 < avg < 100){
      console.log("A")
    }
}
Avg([100,80,50,60,70])


