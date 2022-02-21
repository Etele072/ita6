let ycord = 0
while (true) {
    for (let xcord = 0; xcord <= 4; xcord++) {
        ycord = randint(0, 4)
        for (let index = 0; index <= ycord; index++) {
            led.toggle(xcord, 4 - index)
        }
    }
    basic.pause(500)
    basic.clearScreen()
}
