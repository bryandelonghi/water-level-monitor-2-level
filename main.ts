input.onButtonPressed(Button.A, function () {
    basic.showString("reset")
    basic.clearScreen()
    water_level = 0
})
let water_level = 0
basic.clearScreen()
water_level = 0
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0) && (input.pinIsPressed(TouchPin.P1) && input.pinIsPressed(TouchPin.P2))) {
        water_level = 8
    } else if (input.pinIsPressed(TouchPin.P0) && input.pinIsPressed(TouchPin.P1)) {
        water_level = 4
    } else if (input.pinIsPressed(TouchPin.P0)) {
        water_level = 1
    } else {
        water_level = 0
    }
    basic.showNumber(water_level)
    basic.showString("cm")
})
