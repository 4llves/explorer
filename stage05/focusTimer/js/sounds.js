export default function () {
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const bgRain = new Audio("https://github.com/4llves/myAssets/blob/main/rain.mp3?raw=true")
  const bgForest = new Audio("https://github.com/4llves/myAssets/blob/main/florest.mp3?raw=true")
  const bgFire = new Audio("https://github.com/4llves/myAssets/blob/main/fire.mp3?raw=true")
  const bgCoffeeShop = new Audio("https://github.com/4llves/myAssets/blob/main/coffeeShop.mp3?raw=true")


  bgRain.loop = true
  bgForest.loop = true
  bgFire.loop = true
  bgCoffeeShop.loop = true


  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  return {
    pressButton,
    timeEnd,
    bgRain,
    bgForest,
    bgFire,
    bgCoffeeShop
  }

}