let Li = 0
basic.forever(function () {
    Li = input.lightLevel()
    basic.showNumber(Li)
    if (Li < 15) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
