import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAddMinutes,
  buttonMinusMinutes,
  buttonRain,
  buttonForest,
  buttonFire,
  buttonCoffeeShop,
} from './elements.js'

export default function ({ controls, timer, sound }) {

  buttonPlay.addEventListener('click', function () {
    controls.play()
    timer.countdown()
    sound.pressButton()
  })

  buttonPause.addEventListener('click', function () {
    controls.pause()
    timer.hold()
    sound.pressButton()
  })

  buttonStop.addEventListener('click', function () {
    controls.reset()
    timer.reset()
    sound.pressButton()
  })

  buttonAddMinutes.addEventListener('click', function () {
    timer.addMinutes()
  })

  buttonMinusMinutes.addEventListener('click', function () {
    timer.minusMinutes()
  })

  buttonRain.addEventListener('click', function () {
    buttonRain.classList.add('active')
    sound.bgRain.play()
    buttonForest.classList.remove('active')
    sound.bgForest.pause()
    buttonFire.classList.remove('active')
    sound.bgFire.pause()
    buttonCoffeeShop.classList.remove('active')
    sound.bgCoffeeShop.pause()
  })

  buttonForest.addEventListener('click', function () {
    buttonForest.classList.add('active')
    sound.bgForest.play()
    buttonRain.classList.remove('active')
    sound.bgRain.pause()
    buttonFire.classList.remove('active')
    sound.bgFire.pause()
    buttonCoffeeShop.classList.remove('active')
    sound.bgCoffeeShop.pause()
  })

  buttonFire.addEventListener('click', function () {
    buttonFire.classList.add('active')
    sound.bgFire.play()
    buttonRain.classList.remove('active')
    sound.bgRain.pause()
    buttonForest.classList.remove('active')
    sound.bgForest.pause()
    buttonCoffeeShop.classList.remove('active')
    sound.bgCoffeeShop.pause()
  })

  buttonCoffeeShop.addEventListener('click', function () {
    buttonCoffeeShop.classList.add('active')
    sound.bgCoffeeShop.play()
    buttonRain.classList.remove('active')
    sound.bgRain.pause()
    buttonFire.classList.remove('active')
    sound.bgFire.pause()
    buttonForest.classList.remove('active')
    sound.bgForest.pause()
  })
}