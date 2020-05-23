const script = `
const audio = document.querySelector('audio')
        const play = document.querySelector('#play')
        const pause = document.querySelector('#pause')
        const sound = document.querySelector('#sound')
        const mute = document.querySelector('#mute')
        play.onclick = playRadio()
        pause.onclick = pauseRadio
        sound.onclick = muteRadio
        mute.onclick = soundRadio

        function playRadio() {
            audio.play()
            play.classList.add('d-none')
            pause.classList.remove('d-none')
        }

        function pauseRadio() {
            audio.pause()
            play.classList.remove('d-none')
            pause.classList.add('d-none')
        }

        function muteRadio() {
            audio.muted = true
            mute.classList.remove('d-none')
            sound.classList.add('d-none')
        }
        function soundRadio() {
            audio.muted = false
            sound.classList.remove('d-none')
            mute.classList.add('d-none')
        }

`

export default script
