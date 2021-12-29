controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game.ask("¿Do you want to reset?", "")) {
        game.reset()
    } else {
        game.showLongText("Texto super largo que puede ponerse quien sabe donde... pero por las dudas si me quedo sin ideas para escribir entonces puedo poner un poema...", DialogLayout.Bottom)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Cereza.setPosition(randint(10, 160), randint(10, 120))
    info.startCountdown(5)
})
let Cereza: Sprite = null
scene.setBackgroundColor(15)
let Caza_Cerezas = sprites.create(assets.image`Jack`, SpriteKind.Player)
controller.moveSprite(Caza_Cerezas)
Cereza = sprites.create(assets.image`Cerezita`, SpriteKind.Food)
info.setScore(0)
