let temperatura = 0
basic.forever(function () {
    temperatura = DigitalPin.P0
    serial.writeValue("temperatura", 0)
})
