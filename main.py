def on_button_pressed_a():
    basic.show_leds("""
        # # # # #
        . . . . .
        . . . . .
        . # . . .
        . . . . .
        """)
    basic.show_leds("""
        . # # # #
        . . . . #
        . . . . .
        . # . . .
        . . . . .
        """)
    basic.show_leds("""
        . . # # #
        . . . . #
        . . . . #
        . # . . .
        . . . . .
        """)
    basic.show_leds("""
        . . . # #
        . . . . #
        . . . # #
        . # . . .
        . . . . .
        """)
    basic.show_leds("""
        . . . . #
        . . . . #
        . . # # #
        . # . . .
        . . . . .
        """)
    basic.show_leds("""
        . . . . .
        . . . . #
        . . # # #
        . # # . .
        . . . . .
        """)
    basic.show_leds("""
        . # . . .
        . . . . .
        . . # # #
        # # # . .
        . . . . .
        """)
    basic.show_leds("""
        . # . . .
        . . . . .
        # . # # .
        # # # . .
        . . . . .
        """)
    basic.show_leds("""
        . # . . .
        # . . . .
        # . # . .
        # # # . .
        . . . . .
        """)
    basic.show_leds("""
        # # . . .
        # . . . .
        # . . . .
        # # # . .
        . . . . .
        """)
    basic.show_leds("""
        # # # . .
        # . . . .
        # . . . .
        # # . # .
        . . . . .
        """)
    basic.show_leds("""
        # # # # .
        # . . . .
        # . . . .
        # . . # .
        . . . . .
        """)
    basic.show_leds("""
        # # # # #
        # . . . .
        # . . . .
        . . . # .
        . . . . .
        """)
    basic.show_leds("""
        # # # # #
        # . . . #
        . . . . .
        . . . # .
        . . . . .
        """)
    basic.show_leds("""
        # # # # #
        . . . . #
        . . . . #
        . . . # .
        . . . . .
        """)
    basic.show_leds("""
        . # # # #
        . . . . #
        . . . . #
        . . . # #
        . . . . .
        """)
    basic.show_leds("""
        . . # # #
        . . . . #
        . . . . #
        . . . # #
        . . . . #
        """)
    basic.show_leds("""
        . . . # #
        . . . . #
        . . . . #
        . . . # #
        . . . # #
        """)
    basic.show_leds("""
        . . . . #
        . . . . #
        . . . . #
        . . . # #
        . . # # #
        """)
    basic.show_leds("""
        . . . . .
        . . . . #
        . . . . #
        . . . # #
        . # # # #
        """)
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . #
        . . . # #
        # # # # #
        """)
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        # . . # #
        # # # # #
        """)
    basic.show_leds("""
        . . . . .
        . . . . .
        # . . . .
        # . . # .
        # # # # #
        """)
    basic.show_leds("""
        . . . . .
        . . . . .
        # # . . .
        # . . # .
        # # # # .
        """)
    basic.show_leds("""
        . . . . .
        . . . . .
        # # . . .
        # # . # .
        # # # . .
        """)
    for index in range(2):
        basic.show_leds("""
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    while True:
        basic.show_leds("""
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            """)
        basic.show_leds("""
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            """)
        basic.show_leds("""
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            """)
input.on_button_pressed(Button.B, on_button_pressed_b)
