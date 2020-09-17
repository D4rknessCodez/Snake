input.onButtonPressed(Button.A, function () {
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
            . # # # .
            # . . . .
            # . # # .
            # . . # .
            . # # # .
            `)
        basic.pause(250)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(250)
    }
})
input.onButtonPressed(Button.B, function () {
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
