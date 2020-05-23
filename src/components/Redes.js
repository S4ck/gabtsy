import React from "react"
import ins from '../images/ins.png'
import face from '../images/face.png'
import wsp from '../images/wsp.png'


const Redes = () => (
  <div className="redes row justify-content-between ">
      <a href="https://www.instagram.com/innova_sonidoiluminacion/" target="_blank"><img src={ins}/></a>
      <a href="https://www.facebook.com/innovasonidoilum" target="_blank"><img src={face} /></a>
      <a href="https://api.whatsapp.com/send?phone=543404538923" target="_blank"><img src={wsp} alt=""/></a>
  </div>
)

export default Redes
