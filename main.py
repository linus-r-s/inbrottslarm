def on_button_pressed_ab():
    pass
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def raiseAlarm():
    basic.show_leds("""
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        """)
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)
aktiverat = 0

def on_forever():
    if aktiverat == 1:
        if input.acceleration(Dimension.Y) == 0:
            basic.show_icon(IconNames.YES)
        else:
            raiseAlarm()
basic.forever(on_forever)
