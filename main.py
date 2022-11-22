water_level = 0

def on_button_pressed_a():
    global water_level
    basic.show_string("reset")
    basic.clear_screen()
    water_level = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    global water_level
    basic.pause(1000)
    if input.pin_is_pressed(TouchPin.P0) and (input.pin_is_pressed(TouchPin.P1) and input.pin_is_pressed(TouchPin.P2)):
        water_level = 8
        basic.show_number(water_level)
        basic.show_string("cm")
    elif input.pin_is_pressed(TouchPin.P0) and input.pin_is_pressed(TouchPin.P1):
        water_level = 4
        basic.show_number(water_level)
        basic.show_string("cm")
    elif input.pin_is_pressed(TouchPin.P0):
        water_level = 1
        basic.show_number(water_level)
        basic.show_string("cm")
    else:
        water_level = 0
basic.forever(on_forever)
