input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index < 15; index++) {
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # # .
            . # . # .
            # . . # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . # # # .
            # . . # .
            `)
        basic.pause(100)
    }
    basic.clearScreen()
    for (let index = 0; index < 15; index++) {
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . # # # .
            # . . . #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . . # . .
            . # . # .
            `)
        basic.pause(100)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    for (let x = 0; x <= 4; x++) {
        led.plot(x, 2)
        basic.pause(100)
        led.unplot(x, 2)
        basic.pause(100)
    }
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    for (let counter = 0; counter <= 15; counter++) {
        basic.showIcon(IconNames.Surprised)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(200)
    }
    basic.clearScreen()
})
for (let index = 0; index < 4; index++) {
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.West)
}
basic.clearScreen()
