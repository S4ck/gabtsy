import React,{useState,useRef} from "react"
import play from '../images/play.png'
import pause from '../images/pause.png'
import sound from '../images/sound.png'
import mute from '../images/mute.png'


const Player = ({audio}) => {
  const playBtn = useRef()
  const pauseBtn = useRef()
  const soundBtn = useRef()
  const muteBtn = useRef()

  
  const handlePlay = ()=>{
    playBtn.current.classList.add('d-none')
    pauseBtn.current.classList.remove('d-none')
    audio.current.play()
  }

  const handlePause = ()=>{
    pauseBtn.current.classList.add('d-none')
    playBtn.current.classList.remove('d-none')
    audio.current.pause()
  }

  const handleSound = ()=>{
    soundBtn.current.classList.add('d-none')
    muteBtn.current.classList.remove('d-none')
    audio.current.muted = true

  }

  const handleMute = ()=>{
    muteBtn.current.classList.add('d-none')
    soundBtn.current.classList.remove('d-none')
    audio.current.muted = false
  }
  
  return (
    <div>
    <div className="reproductor ">
        <img id="play" src={play} alt="" className="mr-4" ref={playBtn} onClick={handlePlay}/>
        <img id="pause" src={pause} alt="" className="mr-4 d-none" ref={pauseBtn} onClick={handlePause}/>
        <img id="sound" src={sound} alt="" className="mr-4" ref={soundBtn} onClick={handleSound}/>
        <img id="mute" src={mute} alt="" className="mr-4 d-none" ref={muteBtn} onClick={handleMute}/>
        <span className="live">LIVE</span>
    </div>
    <p className="pulse text-white lead text-center pt-4">ESCUCHANOS EN VIVO</p>
  </div>
  )
}


export default Player
