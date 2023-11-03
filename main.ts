input.onButtonPressed(Button.A, function () {
    bitter += 1
    basic.showNumber(bitter)
})
input.onButtonPressed(Button.AB, function () {
    total = bitter + notbitter
    basic.showString("BITTER")
    basic.showNumber(bitter)
    basic.showString("NOT BITTER")
    basic.showNumber(notbitter)
    basic.showString("TOTAL")
    basic.showNumber(total)
})
input.onButtonPressed(Button.B, function () {
    notbitter += 1
    basic.showNumber(notbitter)
})
let notbitter = 0
let bitter = 0
let total = 0
total = 0
bitter = 0
notbitter = 0
basic.showString("TRAIT COUNTER")
basic.forever(function () {
	
})
