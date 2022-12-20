bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . . . . .
        . # # # .
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.EigthNote)
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Double))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Double))
    music.playTone(330, 500)
    music.playTone(392, 500)
    music.playTone(262, 750)
    music.playTone(294, 250)
    music.playTone(330, 1000)
    music.rest(music.beat(BeatFraction.Double))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(349, 750)
    music.playTone(349, 250)
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Double))
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . # #
        # # # . #
        . . # # #
        . . . # #
        # # # # #
        `)
    basic.showLeds(`
        . . . # #
        . . # . #
        # # # # #
        . . . # #
        # # # # #
        `)
    basic.showLeds(`
        . . . # #
        # # # . #
        . . # # #
        . . . # #
        # # # # #
        `)
    basic.showLeds(`
        . . . # #
        . . # . #
        # # # # #
        . . . # #
        # # # # #
        `)
    TobbieII.shake_head(5)
    TobbieII.vibrate(5)
    TobbieII.dance(5)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_DOWN) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . . . . .
            . . # . .
            . # # # .
            `)
        pins.digitalWritePin(DigitalPin.P13, 1)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_UP) {
        basic.showLeds(`
            . . . . .
            # # . # #
            # # . # #
            # # . # #
            . . . . .
            `)
        pins.digitalWritePin(DigitalPin.P13, 0)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_DOWN) {
        basic.showLeds(`
            . # # # .
            . . # . .
            . . . . .
            . # # # .
            . . # . .
            `)
        pins.digitalWritePin(DigitalPin.P14, 1)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_UP) {
        basic.showLeds(`
            . . . . .
            # # . # #
            # # . # #
            # # . # #
            . . . . .
            `)
        pins.digitalWritePin(DigitalPin.P14, 0)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_DOWN) {
        basic.showLeds(`
            . . . . .
            # . . # .
            # # . # #
            # . . # .
            . . . . .
            `)
        pins.digitalWritePin(DigitalPin.P15, 1)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_UP) {
        basic.showLeds(`
            . . . . .
            # # . # #
            # # . # #
            # # . # #
            . . . . .
            `)
        pins.digitalWritePin(DigitalPin.P15, 0)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_DOWN) {
        basic.showLeds(`
            . . . . .
            . # . . #
            # # . # #
            . # . . #
            . . . . .
            `)
        pins.digitalWritePin(DigitalPin.P16, 1)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_UP) {
        basic.showLeds(`
            . . . . .
            # # . # #
            # # . # #
            # # . # #
            . . . . .
            `)
        pins.digitalWritePin(DigitalPin.P16, 0)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_DOWN) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            . . . . .
            `)
        pins.analogWritePin(AnalogPin.P13, 512)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_UP) {
        basic.showLeds(`
            . . . . .
            # # . # #
            # # . # #
            # # . # #
            . . . . .
            `)
        pins.analogWritePin(AnalogPin.P13, 0)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_DOWN) {
        basic.showLeds(`
            . . . . .
            # # # # #
            . # # # .
            . . # . .
            . . . . .
            `)
        pins.analogWritePin(AnalogPin.P14, 512)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_UP) {
        basic.showLeds(`
            . . . . .
            # # . # #
            # # . # #
            # # . # #
            . . . . .
            `)
        pins.analogWritePin(AnalogPin.P14, 0)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_DOWN) {
        basic.showLeds(`
            . # . . .
            . # # . .
            . # # # .
            . # # . .
            . # . . .
            `)
        pins.analogWritePin(AnalogPin.P15, 355)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_UP) {
        basic.showLeds(`
            . . . . .
            # # . # #
            # # . # #
            # # . # #
            . . . . .
            `)
        pins.analogWritePin(AnalogPin.P15, 0)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_DOWN) {
        basic.showLeds(`
            . . . # .
            . . # # .
            . # # # .
            . . # # .
            . . . # .
            `)
        pins.analogWritePin(AnalogPin.P16, 355)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_UP) {
        basic.showLeds(`
            . . . . .
            # # . # #
            # # . # #
            # # . # #
            . . . . .
            `)
        pins.analogWritePin(AnalogPin.P16, 0)
    }
})
bluetooth.startIOPinService()
bluetooth.startLEDService()
basic.showString("Hello")
