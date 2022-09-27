input.onButtonPressed(Button.A, function () {
    basic.showString("reset")
    basic.clearScreen()
    water_level = 0
    minimum_level = 0
})
let minimum_level = 0
let water_level = 0
basic.clearScreen()
water_level = 0
minimum_level = 0
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        water_level = 1
    }
    if (input.pinIsPressed(TouchPin.P0) && input.pinIsPressed(TouchPin.P1)) {
        water_level = 3
    }
    if (water_level > minimum_level) {
        water_level = water_level
        basic.showNumber(minimum_level)
        basic.showString("cm")
    }
})
