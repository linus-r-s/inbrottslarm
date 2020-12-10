input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
})
function raiseAlarm() {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}

let aktiverat = 0
basic.forever(function on_forever() {
    if (aktiverat == 1) {
        if (input.acceleration(Dimension.Y) == 0) {
            basic.showIcon(IconNames.Yes)
        } else {
            raiseAlarm()
        }
        
    }
    
})
