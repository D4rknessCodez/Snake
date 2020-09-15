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
    basic.showLeds(`
        # # # # #
        # . . . #
        . . . . .
        . . . # .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        . . . . #
        . . . . #
        . . . # .
        . . . . .
        `)
    basic.showLeds(`
        . # # # #
        . . . . #
        . . . . #
        . . . # #
        . . . . .
        `)
    basic.showLeds(`
        . . # # #
        . . . . #
        . . . . #
        . . . # #
        . . . . #
        `)
    basic.showLeds(`
        . . . # #
        . . . . #
        . . . . #
        . . . # #
        . . . # #
        `)
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . # #
        . . # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . #
        . . . # #
        . # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        # . . # .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        # . . # .
        # # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        # # . # .
        # # # . .
        `)
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
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
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
    }
})
