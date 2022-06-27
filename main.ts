// (a) is the same thing as [Space]
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.sayText("save me")
})
let projectile4: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
color.setPalette(
color.Arcade
)
mySprite = sprites.create(img`
    . . . b b b b b b b b b . . . . 
    . . b 1 d d d d d d d 1 b . . . 
    . b 1 1 1 1 1 1 1 1 1 1 1 b . . 
    . b d b c c c c c c c b d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c 6 d 6 6 6 6 6 c d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c c c c c c c c c d b . . 
    . c b b b b b b b b b b b c . . 
    c b c c c c c c c c c c c b c . 
    c 1 d d d d d d d d d d d 1 c . 
    c 1 d 1 1 d 1 1 d 1 1 d 1 1 c . 
    c b b b b b b b b b b b b b c . 
    c c c c c c c c c c c c c c c . 
    `, SpriteKind.Player)
scaling.scaleByPixels(mySprite, 20, ScaleDirection.Uniformly, ScaleAnchor.Middle)
console.logValue("width", scene.screenWidth())
console.logValue("height", scene.screenHeight())
music.beamUp.playUntilDone()
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
scene.setBackgroundImage(img`
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888811118888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888188818888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881888818888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881888818888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888818888818888888888188888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888818888818888888888188888888888888888888888888888888888888888888888
    8888888888888188888888888888888888888888811111111111111188888888818888888888888888888888888888818888818888888888188888888888888888888888888888888888888888888888
    8888888888881188888888888888888888888888818888888888888888888888118888888888888888888888888888818888818888888888188888888888888888888888888888888888888888888888
    8888888888881188888888888888888888888888818888888888888888888881818888888888888888888888888888818888818888888888188888888888888888888888888888888888888888888888
    8888888888881188888888888888888888888888818888888888888888888881188888888888888888888888888888188888881888888888188888888888888888888888888888888888888888888888
    8888888888818188888888888888888888888888818888888888888888888818188888888111111111111111888888188888881888888888188888888888888888888888888888888888888888888888
    8888888888818188888888888888888888888888818888888888888888888188188888888888888188888888888881888888881888888888818888888888888888888888888888888888888888888888
    8888888888818188888888888888888888888888818888888888888888888188188888888888888188888888888881888888888188888888818888888888888888888888888888888888888888888888
    8888888888188818888888888888888888888888818888888888888888888188188888888888888188888888888881888888888188888888818888888888888888888888888888888888888888888888
    8888888888188818888888888888888888888888818811111111888888888188188888888888888188888888888818888888888188888888818888888888888888888888888888888888888888888888
    8888888881888818888888888888888888888888188888888888888888881888188888888888888188888888888818888888888188888888818888888888888888888888888888888888888888888888
    8888888881888811888888888888888888888888188888888888888888881888188888888888888818888888888188888888888188888888818888888888888888888888888888888888888888888888
    8888888881111111888888888888888888888888188888888888888888818888188888888888888818888888888188888888888188888888818888888888888888888888888888888888888888888888
    8888888881888888188888888888888888888888188888888888888888818888188888888888888818888888881811111111111118888888818888888888888888888888888888888888888888888888
    8888888881888888118888888888888888888888188888888888888111111111818888888888888818888888881888888111188818888888881888888888888888888888888888888888888888888888
    8888888888888888818888888888888888888888188888888888888888188888818888888888888818888888818888888888888818888888881888888888888888888888888888888888888888888888
    8888888888888888818888888818888888888888888888888888888881888888818888888888888818888888818888888888888818888888881888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888881888888881111888888888811888888818888888888888881888888881888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888818888888888888188888888888888888188888888888888881888888881888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888818888888888888888888888888888888188888888888888881888888881888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888818888888888888888888888888888888188888888888888888188888881888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888881888888888888888888188888888188888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888188888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888188888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888188888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888188888881111111111111111118888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888188888118888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888188111888888888888888888888888888888888888888
    8888888888888888888881888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888111888888888888888888888888888888888888888888
    8888888888881111111118888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888118888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888188888888888888888888888888888888888888888888888888888888888888888888888888888888188888888888888888888888888888888888888888888888888888888888888888888
    8888888888188888888888888888888888888888888888888888888888888888888888888888888888888888888188888888888888888888888888888888888888888888888888888888888888888888
    8888888888188888888888888888888888888888888888888888888888888888888888888888888888888888888188888888888888888888888888888888888888888888888888888888888888888888
    8888888888188888888888888888888888888888888888888888888888811888888888888888888888888888888188888888888888118888888888888888888888888888888888888888888888888888
    8888888888181111188888888881888888888888888888888118888881181888888888888888888888888888888188888888888888188888888888888888888888888888888888888888888888888888
    8888888888111888811118888888118888888888888888811888888118881888888881111111118888888888888188888111111111888888888888888888888188888888888888888888888888888888
    8888888888188888888888888888881888888888888888188888888188881888888188888888818888888888888188111888888888888888888888888888888118888888888888888888888888888888
    8888888888188888888888888888888188881188888888188888888188881888818188888888881188888888881111888888888888888888888111888888888181888888888888888888888888888888
    8888888888188888888888888888888111118888888888188888888188818888818188888888888188888881118818888888888888888888811118888888881881888888888888888888888888888888
    8888888888188888888888888888881118888888888888188888888188118888818188888888811188888888888818888888888888818888881811111118818888188888888888888888888888888888
    8888888888188888888888888888118881888888888888118888888181188888818188888881188888888888888818888888888888818881118888818888818888188888888888188888888888888888
    8888888888118888888888888111888881111188888888881111111111188888118111111118888888888888888818888888888888881818888888818888818888818888888881888888888888888888
    8888888888881111118888881188888888888888888888888888888888811188188188888888888888888888888818888888888888881818888888118888818888881888888818888888888888888888
    8888888888888888881111888888888888888888888888888888888888888811188188888888888888888888888818888888888888881118888811888888818888881888881188888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888188888888888888888888888881888888888888888111111188888888818888888181118888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888881888888888888888888888888881888888888888888188888888888888888888888111888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888881888888888888888888888888881888888888888888188888888888888888888888888888888888888888888888888
    8888888888888888888811188888888888888888888888888888888888888888881888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888881188818888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888881888881888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888818888888188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888811888888818888888888881111888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888118888888818888888881118888888888888888888888888888888888888888888881111888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888881111111888881888811118888888888888888888111111188818888888888888888118888111188888888888888888888888888888888888888888888888888888888888888888888
    8888888888888818888888888881881188888888888888888888811888888888818888888888888881888888888118888888888888888888888888888888888888888888888888888888888888888888
    8888888888888818888888888881881888888888888888888888188888888888818888888888188881888888888818888888888888888888811118888888888888888888888888888888888888888888
    8888888888888188888888888881881888888888888888888888188888888888818888888888188881888888888188888888888888888888188818888888888888888888888888888888888888888888
    8888888888888188888888888881881888888888888888888888188888888888818888888888188881888881111888888888111118888888188818888888888888888888888888888888888888888888
    8888888888888188888888888881881888888888888888888888188888888888818888888888188881888118888888888811888888888888188818888888888888888888888888888888888888888888
    8888888888888818888888888881888188888888888888888888188888888888818888888888188881888188888888811188888888888888188818888888888888888888888888888888888888888888
    8888888888888881188888888818888811888888888888888888818888888888818888888888188881111188888888818888888888888888188818888888888888888888888888888888888888888888
    8888888888888888811111111188888888111888888888888888881111111188818888888881188881111188888888818888888111188888188818888888888888888888888888888888888888888888
    8888888888888888888888888888888888888111888888188888888888888888881888888881888881888811888888818811111888888888188818888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888111118188888888888888888881888888881888881888888118888881888888888888888118818888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888881188888888888888888881888888881888881888888881188888188888888888888118818888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888188888818888881888888888111888811888881118888818818888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888188888188888888888888888888888888111888118888818818888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888811111188888888888888888888888888888111188888818818888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888811118888888888888888888888888888888888888888888
    8888111111111111111111111111111111111111111111888888888888888888888888888888888888888888888888888888888888888888818888888888888888888888888888888888888888888888
    8881888888888888888888888888888888888888888888111111118888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888881111188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888811118888888888888818818888881888888188888888888811111118888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888881111181188888811111111188811181881111118888888888888888881111111118888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888811188888118888818881188188111811188888888888888888888888888881111888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888811118881888188118888188111188811118888888888888888888888888888111111118888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888881111888188888888188118888818881888888888888888888888888888888888881111111111111111111111111111111111111111111111888888888888888888888888888
    8888888888881888111111888188118888888188818888818881888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888811111888888888188881188888188818888818881888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888188888811111188818888818888188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888188888888888888818888811888188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888818188818888888888888888888888888888888888881111111118888888888111188888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888818188818888881888888888888888888888888888888888888818888811111888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888818188818888881888888888888888888888888888888888888881888818888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888818188881888888188888888888888888818888888888888888881888818888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888818188881888888188888888888888888188888888888888888888188818888888888888888888888888888888888888888888888888888888
    8888888888888888118888888888888888888881888888818188881888888188888888888888881888888888888888888888188818888888888888888888888888888888888888888888888888888888
    8888888888888811888888888888888888888118888888818188888188888188888888888888881888888888888888888888188818888888888888888888888888888888888888888888888888888888
    8888888888881188888888888888888881111888888888818188888188888188888888888888881888888888888888888888188881888888888888888888888888888888888888888888888888888888
    8888888888818188888888888888888888188888888888881188888188888188888888888888881888888888888888888888188881888111111111188888888888888888888888888888888888888888
    8888888881188818888888888888888888188888888888881188888188888188888888888888881888888888118888888888188881111888888888888888888888888888888888888888888888888888
    8888888881888881188888888888888888188888888888881188888188888188888888888888881888888888181188888888188881888888888888888888888888888888888888888888888888888888
    8888888881888888188888888888888888188888888888881818888188888188888888888888881888888888188811888881888888188888888888888888888888888888888888888888888888888888
    8888888881888888188888888888888888188888888888888118888818888188888888888888881118888888188888118881888888188888888888888888888888888888888888888888888888888888
    8888888881888888188888888888888888188888888888888118811118888188888888888888881881188888818888818118888888188888888888888888888888888888888888888888888888888888
    8888888881888888188888888881188888188888888888888118881118888188888888888888888188811111818888881888888888188881188888888888888888888888888888888888888888888888
    8888888881888888188888888811888888818888888888888118888881888188888888888888888818888881818888118188818888111111888888888888888888888888888888888888888888888888
    8888888881888888188888881188888888818888888888888118888881888188888888888888888881188881881111188818818888888888888888888888888888888888888888888888888888888888
    8888888881888881888888881888888888818881111111888818888818888188888888888888888888811111888888888881818888888888888888888888888888888888888888888888888888888888
    8888888881888811888818818888888888811118888881888811111188888188888888888888888888888888888888888888118888888888888888888888888888888888888888888888888888888888
    8888888881111188888881118888888888818888888818188118888888888188818888888818888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888181111888888881888888188111811888888888188881111111188888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888881888811888888811888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888111188888888881888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    `)
forever(function () {
    pause(100)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . c c c c c c c c c c c c . . . 
        c 1 1 1 1 1 1 1 1 1 1 1 1 c . . 
        c d d d d d d d d d d d d c . . 
        c d c c c c c c c c c c d c . . 
        c d b d b b b b b b b b d c . . 
        c d b b b b b b b b b b d c . . 
        c d b b b b b b b b b b d c . . 
        c d b b b b b b b b b b d c . . 
        c 1 b b b b b b b b b b 1 c . . 
        c 1 1 d 1 1 d 1 1 d 1 1 1 c . . 
        c 1 d d d d d d d d d d 1 c . . 
        c 1 d 1 1 d 1 1 d 1 1 d 1 c . . 
        c b b b b b b b b b b b b c . . 
        c c c c c c c c c c c c c c . . 
        `, mySprite, randint(-100, 100), randint(-100, 100))
    projectile4 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . c c c c c c c c c c c c . . . 
        c 1 1 1 1 1 1 1 1 1 1 1 1 c . . 
        c d d d d d d d d d d d d c . . 
        c d c c c c c c c c c c d c . . 
        c d b d b b b b b b b b d c . . 
        c d b b b b b b b b b b d c . . 
        c d b b b b b b b b b b d c . . 
        c d b b b b b b b b b b d c . . 
        c 1 b b b b b b b b b b 1 c . . 
        c 1 1 d 1 1 d 1 1 d 1 1 1 c . . 
        c 1 d d d d d d d d d d 1 c . . 
        c 1 d 1 1 d 1 1 d 1 1 d 1 c . . 
        c b b b b b b b b b b b b c . . 
        c c c c c c c c c c c c c c . . 
        `, mySprite, randint(-100, 100), randint(-100, 100))
    projectile4 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . c c c c c c c c c c c c . . . 
        c 1 1 1 1 1 1 1 1 1 1 1 1 c . . 
        c d d d d d d d d d d d d c . . 
        c d c c c c c c c c c c d c . . 
        c d b d b b b b b b b b d c . . 
        c d b b b b b b b b b b d c . . 
        c d b b b b b b b b b b d c . . 
        c d b b b b b b b b b b d c . . 
        c 1 b b b b b b b b b b 1 c . . 
        c 1 1 d 1 1 d 1 1 d 1 1 1 c . . 
        c 1 d d d d d d d d d d 1 c . . 
        c 1 d 1 1 d 1 1 d 1 1 d 1 c . . 
        c b b b b b b b b b b b b c . . 
        c c c c c c c c c c c c c c . . 
        `, mySprite, randint(-100, 100), randint(-100, 100))
    projectile4 = sprites.createProjectileFromSprite(img`
        dddddddddddddddddddddddddd122221
        ddddfffffdfddfffffddffddfd212212
        ddddfddddfffdddfdddfffddff222122
        ddddfddddfdfdddfdddfdffddf221122
        ddddfffddfdffddfdddfddfddf212212
        ddddfdddffffffdfddffffffdf122221
        ddddddddfddddfdfddfddddfdfdddddd
        dfffffffffdddddddddddddddddddddd
        dfddddddfdffdfffdfffdddfffffdddd
        dfffffddfddfdfdfdfdddddfdddfdddd
        dfddddddff9999999f9999dfffffdddd
        dffdddddff9ddfffdfdfd9fffffddddd
        ddfffffdfd9ddfdfdffdd9dfddffdddd
        dddddddddd9ddfffdfdfd9dfdddddddd
        dddddddddd999999999999dfdddddddd
        dddddddddddddddddddddddddddddddd
        `, mySprite, randint(-100, 100), randint(-100, 100))
})
