input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.North)
    radio.sendString("F")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.South)
    radio.sendString("B")
})
radio.setGroup(1)
basic.showLeds(`
    . . . . .
    . . # . .
    . # # # .
    . . # . .
    . . . . .
    `)
basic.forever(function () {
    if (input.acceleration(Dimension.X) < -15) {
        basic.showArrow(ArrowNames.West)
        radio.sendString("L")
    } else if (input.acceleration(Dimension.X) > 15) {
        basic.showArrow(ArrowNames.East)
        radio.sendString("R")
    } else if (input.acceleration(Dimension.X) >= -10 && input.acceleration(Dimension.X) <= 10) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        radio.sendString("S")
    }
    basic.pause(200)
})
