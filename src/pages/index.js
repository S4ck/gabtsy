import React, {useRef} from "react"
import '../css/styles.min.css'
import SEO from "../components/seo"
import logo from '../images/logo.png'
import Player from '../components/Player'
import Redes from '../components/Redes'


const IndexPage = () =>{ 
  const audio = useRef()
  
  return(
  <>
    <SEO title="🔥 INNOVA 📻 🔥"/>    
    <main className="container mx-auto d-flex flex-column justify-content-between align-items-center py-4">  
      <img src={logo} className="logo" alt=""/>
      <Player audio={audio}/>
      <Redes/>
    </main>
    <audio ref={audio} preload="auto" src="http://freeus5.listen2myradio.com/live.mp3?typeportmount=s1_25789_stream&nocache=true"></audio>
  </>  
)}

export default IndexPage
