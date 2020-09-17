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
