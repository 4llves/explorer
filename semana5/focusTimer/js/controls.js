export default function Controls({
  buttonPlay,
  buttonPause,
  buttonAddMinutes,
  buttonMinusMinutes,
  buttonRain,
  buttonForest,
  buttonFire,
  buttonCoffeeShop,
}) {

  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonAddMinutes.classList.add('hidden')
    buttonMinusMinutes.classList.add('hidden')
  }

  function pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  function reset() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    buttonAddMinutes.classList.remove('hidden')
    buttonMinusMinutes.classList.remove('hidden')
  }

  return {
    play,
    pause,
    reset
  }
}