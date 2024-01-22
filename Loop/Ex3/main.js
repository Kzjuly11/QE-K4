function sort(a,b,c){
    if(a>b && a>c){
        if(b>c){
            return a + "," + b + "," + c  
        }
        else {
            return  a + "," + c + "," + b 
        }
    }
    else if(b>a && b>c){
        if(a>c){
            return b + "," + a + "," + c  
        }
        else {
            return  b + "," + c + "," + a 
        }
    }
    else if(c>a && c>b){
        if(a>b){
            return c+ "," + a + "," + b ; 
        }
        else {
            return  c + "," + b + "," + a ; 
        }
    }
}
console.log(sort(1,2,3))