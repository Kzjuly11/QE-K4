function uncamelized(str,x) {
    
        let a = ''; 
        for (let i = 0; i < str.length; i++) { 
            
            if (i > 0 && str[i] === str[i].toUpperCase()) { 
                if(typeof(x) == "undefined"){
                    a+= " " + str[i].toLowerCase();
                } 
                else {
                    a+= x + str[i].toLowerCase();
                }
            } 
            else { 
                a+= str[i].toLowerCase(); 
            }

        } 
        return a; 
        
    } 
    console.log(uncamelized("helloWord","_")) ;
    console.log(uncamelized('helloWorld'));
    console.log(uncamelized('helloWorld', '-'));
    console.log(uncamelized('helloWorld', '_'));