// 作者：郑天依
// 莲华小学五三班
// 显示表情
basic.showIcon(IconNames.EigthNote)
radio.setGroup(8)
radio.setTransmitPower(7)
// 作者：郑天依
// 莲华小学五三班
basic.forever(function () {
    // 显示颜色
    makerobot.rgb().showColor(neopixel.colors(NeoPixelColors.Red))
    // 开始跳舞
    sloth.do_action(sloth.actions(sloth.action_name.moonwalk_left), 4, 100)
    makerobot.rgb().showColor(neopixel.colors(NeoPixelColors.Orange))
    sloth.do_action(sloth.actions(sloth.action_name.moonwalk_right), 4, 100)
    makerobot.rgb().showColor(neopixel.colors(NeoPixelColors.Green))
    sloth.do_action(sloth.actions(sloth.action_name.shake_left), 4, 100)
    makerobot.rgb().showColor(neopixel.colors(NeoPixelColors.Blue))
    sloth.do_action(sloth.actions(sloth.action_name.shake_right), 4, 100)
    makerobot.rgb().showColor(neopixel.colors(NeoPixelColors.Blue))
    sloth.do_action(sloth.actions(sloth.action_name.go_up_and_down), 4, 100)
    makerobot.rgb().showColor(neopixel.colors(NeoPixelColors.Indigo))
    sloth.do_action(sloth.actions(sloth.action_name.swing), 4, 100)
    makerobot.rgb().showColor(neopixel.colors(NeoPixelColors.Violet))
    sloth.do_action(sloth.actions(sloth.action_name.walk_boldly), 4, 100)
    makerobot.rgb().showColor(neopixel.colors(NeoPixelColors.Purple))
    sloth.do_action(sloth.actions(sloth.action_name.walk_backward_boldly), 4, 100)
    makerobot.rgb().showColor(neopixel.colors(NeoPixelColors.White))
    sloth.do_action(sloth.actions(sloth.action_name.walk_shyly), 4, 100)
    makerobot.rgb().showColor(neopixel.colors(NeoPixelColors.Black))
    sloth.do_action(sloth.actions(sloth.action_name.walk_backward_shyly), 4, 100)
    makerobot.rgb().showColor(neopixel.colors(NeoPixelColors.Violet))
    sloth.do_action(sloth.actions(sloth.action_name.big_swing), 4, 100)
})
