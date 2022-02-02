function saturdayFun() {
    return 'This Saturday, I want to roller-skate!';
}

function mondayWork() {
    return 'This Monday, I will go to the office.';
}

function wrapAdjective() {
    return function innerFunction(special) {
        let result = wrapAdjective('*')
        let emphatic = "You are *a hard worker*!"
        return function innerInnerFunction() {
            result = wrapAdjective("||")
            emphatic = "You are ||a dedicated programmer||!"
        }
    }
}
wrapAdjective('*');