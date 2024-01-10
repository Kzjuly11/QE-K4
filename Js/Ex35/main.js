
function Random(item){
    return item[Math.floor(Math.random()*item.length)]
}
var item = [1,2,3,4,5,6,7]
console.log(Random(item))