let degree = input.compassHeading()
basic.forever(function () {
    degree = input.compassHeading()
    if (degree < 45) {
        basic.showString("N")
    } else if (degree < 135) {
        basic.showString("E")
    } else if (degree < 225) {
        basic.showString("S")
    } else {
        basic.showString("N")
    }
    basic.pause(100)
})
