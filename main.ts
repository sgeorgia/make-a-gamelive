let live_a = 0
let live = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(live_a)
    live_a += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(live_a)
    live_a += 3
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(live_a)
    live_a += 2
})
input.onGesture(Gesture.Shake, function () {
    live = 0
})
basic.forever(function () {
    if (live_a > 15) {
        basic.showIcon(IconNames.Heart)
    }
})
