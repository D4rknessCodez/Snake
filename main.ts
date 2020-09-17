input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . # . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # #
        . . . . #
        . . . . .
        . # . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # # #
        . . . . #
        . . . . #
        . # . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . # #
        . . . . #
        . . . # #
        . # . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . . #
        . . # # #
        . # . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . # # #
        . # # . .
        . . . . .
        `)
    basic.showLeds(`
        . # . . .
        . . . . .
        . . # # #
        # # # . .
        . . . . .
        `)
    basic.showLeds(`
        . # . . .
        . . . . .
        # . # # .
        # # # . .
        . . . . .
        `)
    basic.showLeds(`
        . # . . .
        # . . . .
        # . # . .
        # # # . .
        . . . . .
        `)
    basic.showLeds(`
        # # . . .
        # . . . .
        # . . . .
        # # # . .
        . . . . .
        `)
    basic.showLeds(`
        # # # . .
        # . . . .
        # . . . .
        # # . # .
        . . . . .
        `)
    basic.showLeds(`
        # # # # .
        # . . . .
        # . . . .
        # . . # .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . .
        # . . . .
        . . . # .
        . . . . .
        `)
    while (true) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    while (true) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
