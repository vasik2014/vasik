input.onPinPressed(TouchPin.P0, function () {
    postava.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.A, function () {
    postava.move(-1)
})
input.onButtonPressed(Button.B, function () {
    postava.move(1)
})
input.onPinPressed(TouchPin.P1, function () {
    postava.change(LedSpriteProperty.Y, 1)
})
let postava: game.LedSprite = null
postava = game.createSprite(2, 2)
postava.move(0)
