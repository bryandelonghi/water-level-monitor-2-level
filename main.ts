let water_level = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("reset")
    basic.clearScreen()
    water_level = 0
})
basic.forever(function () {
    basic.pause(1000)
    if (input.pinIsPressed(TouchPin.P0) && (input.pinIsPressed(TouchPin.P1) && input.pinIsPressed(TouchPin.P2))) {
        water_level = 8
        basic.showNumber(water_level)
        basic.showString("cm")
    } else if (input.pinIsPressed(TouchPin.P0) && (input.pinIsPressed(TouchPin.P1) && !(input.pinIsPressed(TouchPin.P2)))) {
        water_level = 4
        basic.showNumber(water_level)
        basic.showString("cm")
    } else if (input.pinIsPressed(TouchPin.P0) && (!(input.pinIsPressed(TouchPin.P1)) && !(input.pinIsPressed(TouchPin.P2)))) {
        water_level = 1
        basic.showNumber(water_level)
        basic.showString("cm")
    } else {
        water_level = 0
    }
})
