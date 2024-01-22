function gcd(a,b) {
    var tmp;
    while(b != 0) {
        tmp = a % b;
        a = b;
        b = tmp;
    }
    return a;
}
console.log(gcd(20,28))