input.onPinPressed(TouchPin.P0, function () {
    postava.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.A, function () {
    postava.move(-1)
})
input.onPinPressed(TouchPin.P2, function () {
    zivoty += -1
    serial.writeLine("" + (zivoty))
})
input.onButtonPressed(Button.B, function () {
    postava.move(1)
})
input.onPinPressed(TouchPin.P1, function () {
    postava.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.Shake, function () {
    zivoty += 1
    serial.writeLine("" + (zivoty))
})
let zivoty = 0
let postava: game.LedSprite = null
postava = game.createSprite(2, 2)
zivoty = 10
serial.writeLine("" + (zivoty))
