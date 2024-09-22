//console.log("hello world");
let a = 45
let b = 9
let c = a/b
//console.log(c)
let boy = "Saif"
let girl = "Janice"

//console.log(boy+" says hello to "+girl)
let five = 4

let four = 5
//console.log (four + five)
let myself = "go,"
let mine = " fuck yourself"
//console.log(myself,mine)

var o = 14
const p = -5

//console.log(o*p)

var str = "Hellow warld"
var value = str.includes("World")
//console.log(value)

var d = 2
var e = 4
var f = d+e
//console.log(f)

//building a function
/*function add_it(a,b) {
    console.log(a+b)
}

add_it(2,4)
add_it(myself,mine)

function addReturn(value1,value2=5){
    return value1 + value2
}

var dum = addReturn(myself,mine)

//console.log(dum)
var blub= addReturn(5)

console.log(blub)*/

var arr1 = [1,2,3,4,5]

//console.log(arr1[0]+arr1[3])

var arr2 = [2,3,4,5,6]

/*if (arr1[3]%arr2[2]===0){
    console.log("we're the same")
}

if (arr1[3]%arr2[0]===0){
    console.log("divisive")
}*/

var num1 = 5;
var num2 = 8;

/*if(num1 > 4 && num2 < 10){
    console.log("This is the and operation")
}

if (num1 < 4 || num2 < 10){
    console.log("We know th OR operation")
}

if (arr1[3]<num1){
    console.log("make me a samich")
} else {
    console.log("Never mind")
}*/

for (var i = 0; i<arr1.length;i++) {
    if (arr1[i]===arr2[i]){
        console.log("they are the same")
    } else {
        console.log("they are worlds apart")
    }
}

arr1.push(6)
console.log(arr1)

var obj ={"name":"Omi","age":31,"nationatility":"Bangladeshi","Role":"Digital marketing Manager"}
var obj1 = {"name":"Ayon","age":22,"nationatility":"Bangladeshi","Role":"Developer"}

//console.log(obj.name)

window.onload = function(e){
    var el1 = document.querySelector("#text")
    console.log(el1.innerHTML)
    var el2 =document.querySelector(".empty")
    el2.innerHTML = "look a donkey!"
    console.log(el2.innerHTML)
    var value = el2.getAttribute("value")
    console.log(value)
    var el3 = el2.dataset.getNumber
    console.log(el3)
}

window.onclick = function(e){
    
}