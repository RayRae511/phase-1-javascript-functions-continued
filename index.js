// code your solution here
function saturdayFun(_event = 'roller-skate'){
    return "This Saturday I will ${_event}."
}
function mondayWork(_event = "go to the office"){
    return "This Monday we will ${_event}"
}
function wrapAdjective(flair = `*`){
    return function (Adjective = `special`){
        return `You are ${flair}${Adjective}${flair}!`
    }
}
wrapAdjective("%")("a dedicated programmer"); //=> "you are %a dedicated programmer%!"