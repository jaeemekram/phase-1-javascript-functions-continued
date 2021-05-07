// Your code here
function saturdayFun(var1= "roller-skate") {
    return(`This Saturday, I want to ${var1}!`);
}



const mondayWork = function(var2= "go to the office") {
    return(`This Monday, I will ${var2}.`)
}

function wrapAdjective(string= "*") {
    return function (var3= "special") {
        return(`You are ${string}${var3}${string}!`)
    }
}

// function wrapAdjective(flair = '*'){
//     return function(string = 'special'){
//         return `You are ${flair}${string}${flair}!`
//     }
// }