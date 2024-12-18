input.onButtonPressed(Button.A, function () {
    basic.showString("" + (temperatura))
})
let vtrl_lvl = 0
let temperatura = 0
lcd1602.setAddress(
lcd1602.I2C_ADDR.addr1
)
lcd1602.set_LCD_Show(lcd1602.visibled.visible)
lcd1602.set_backlight(lcd1602.on_off.on)
basic.forever(function () {
    temperatura = Math.round(pins.analogReadPin(AnalogPin.P0) * 0.0812)
    serial.writeValue("temperatura", temperatura)
    lcd1602.putString(
    "temperatura   c",
    0,
    0
    )
    lcd1602.putNumber(
    temperatura,
    12,
    0
    )
})
basic.forever(function () {
    vtrl_lvl = 100 * Math.round(pins.analogReadPin(AnalogReadWritePin.P1) / 350)
    serial.writeValue("vtrl lvl", vtrl_lvl)
    lcd1602.putString(
    "wtrl lvl    %",
    0,
    1
    )
    lcd1602.putNumber(
    vtrl_lvl,
    9,
    1
    )
})
