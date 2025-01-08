let soil_hum = 0
let vtrl_lvl = 0
let temperatura = 0
let gas = 0
lcd1602.setAddress(
lcd1602.I2C_ADDR.addr1
)
lcd1602.set_LCD_Show(lcd1602.visibled.visible)
lcd1602.set_backlight(lcd1602.on_off.on)
basic.forever(function () {
    gas = 100 * Math.round(pins.analogReadPin(AnalogReadWritePin.P3) / 1023)
    serial.writeValue("gas", gas)
    temperatura = Math.round(pins.analogReadPin(AnalogPin.P0) * 0.0812)
    serial.writeValue("temperatura", temperatura)
    vtrl_lvl = 100 * Math.round(pins.analogReadPin(AnalogReadWritePin.P1) / 350)
    serial.writeValue("vtrl lvl", vtrl_lvl)
    soil_hum = 100 * Math.trunc(pins.analogReadPin(AnalogReadWritePin.P2) / 1023)
    serial.writeValue("soil hum", soil_hum)
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
    basic.pause(2000)
    lcd1602.clear()
    lcd1602.putString(
    "soil hmdty",
    0,
    0
    )
    lcd1602.putNumber(
    soil_hum,
    12,
    0
    )
    lcd1602.putString(
    "gas",
    0,
    1
    )
    lcd1602.putNumber(
    gas,
    5,
    1
    )
})
basic.forever(function () {
	
})
